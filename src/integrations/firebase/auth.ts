import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    updateProfile,
    User,
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from './client';

export interface UserProfile {
    email: string;
    name: string;
    role: 'migrant' | 'company' | 'admin' | 'mediator' | 'lawyer' | 'psychologist' | 'manager' | 'coordinator' | 'trainer';
    nif?: string;
    createdAt: any;
    updatedAt: any;
}

/**
 * Register a new user with email and password
 */
export async function registerUser(
    email: string,
    password: string,
    name: string,
    role: 'migrant' | 'company' | 'admin' | 'mediator' | 'lawyer' | 'psychologist' | 'manager' | 'coordinator' | 'trainer' = 'migrant',
    additionalData?: { nif?: string }
) {
    try {
        // Create user in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update display name
        await updateProfile(user, { displayName: name });

        // Create user profile in Firestore
        const userProfile: UserProfile = {
            email,
            name,
            role,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            ...(additionalData?.nif && { nif: additionalData.nif }),
        };

        await setDoc(doc(db, 'users', user.uid), userProfile);

        // Create empty profile document
        await setDoc(doc(db, 'profiles', user.uid), {
            name,
            email,
            phone: null,
            birthDate: null,
            nationality: null,
            currentLocation: null,
            arrivalDate: null,
            updatedAt: serverTimestamp(),
        });

        return { user, profile: userProfile };
    } catch (error: any) {
        console.error('Error registering user:', error);
        throw error;
    }
}

/**
 * Sign in user with email and password
 */
export async function loginUser(email: string, password: string) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error: any) {
        console.error('Error logging in:', error);
        throw error;
    }
}

/**
 * Sign out current user
 */
export async function logoutUser() {
    try {
        await signOut(auth);
    } catch (error: any) {
        console.error('Error logging out:', error);
        throw error;
    }
}

/**
 * Send password reset email
 */
export async function resetPassword(email: string) {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
        console.error('Error sending password reset email:', error);
        throw error;
    }
}

/**
 * Get user profile from Firestore
 */
export async function getUserProfile(userId: string): Promise<UserProfile | null> {
    try {
        const userDoc = await getDoc(doc(db, 'users', userId));
        if (userDoc.exists()) {
            return userDoc.data() as UserProfile;
        }
        return null;
    } catch (error: any) {
        console.error('Error getting user profile:', error);
        throw error;
    }
}

/**
 * Update user profile in Firestore
 */
export async function updateUserProfile(userId: string, data: Partial<UserProfile>) {
    try {
        await updateDoc(doc(db, 'users', userId), {
            ...data,
            updatedAt: serverTimestamp(),
        });
    } catch (error: any) {
        console.error('Error updating user profile:', error);
        throw error;
    }
}

/**
 * Get current authenticated user
 */
export function getCurrentUser(): User | null {
    return auth.currentUser;
}
