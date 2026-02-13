import { useEffect, useState } from 'react';
import { registerUser } from '@/integrations/firebase/auth';
import { setDocument } from '@/integrations/firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { UserRole } from '@/contexts/AuthContext';

type Result = {
  email: string;
  role: string;
  status: 'created' | 'exists' | 'error';
  message?: string;
};

async function createUser(
  email: string,
  password: string,
  name: string,
  role: 'migrant' | 'company' | 'admin'
): Promise<Result> {
  try {
    // Register user in Firebase Auth and create profile in Firestore
    const { user } = await registerUser(email, password, name, role as UserRole);

    // If role is company, create company profile in Firestore
    if (role === 'company') {
      await setDocument('companies', user.uid, {
        user_id: user.uid,
        company_name: name,
        verified: false,
        createdAt: new Date().toISOString(),
      });
    } else if (role === 'migrant') {
      // Create completed triage for test migrant user so they can access dashboard immediately
      await setDocument('triage', user.uid, {
        userId: user.uid,
        completed: true,
        answers: {}, // Empty answers but marked as completed for testing
        createdAt: new Date().toISOString(),
      });
    }
    return { email, role, status: 'created' };
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      return { email, role, status: 'exists', message: 'Já existe' };
    }
    return { email, role, status: 'error', message: error.message || 'Erro desconhecido' };
  }
}

export default function CreateTestUsersDev() {
  const [running, setRunning] = useState(false);
  const [results, setResults] = useState<Result[]>([]);

  async function run() {
    setRunning(true);
    setResults([]);

    const users = [
      {
        email: 'migrante.teste@local.test',
        password: 'Teste1234!',
        name: 'Migrante Teste',
        role: 'migrant' as const,
      },
      {
        email: 'empresa.teste@local.test',
        password: 'Teste1234!',
        name: 'Empresa Teste',
        role: 'company' as const,
      },
      {
        email: 'cpc.admin@local.test',
        password: 'Teste1234!',
        name: 'CPC Admin',
        role: 'admin' as const,
      },
    ];

    const out: Result[] = [];
    for (const u of users) {
      try {
        const res = await createUser(u.email, u.password, u.name, u.role);
        out.push(res);
      } catch (e: unknown) {
        const message = e instanceof Error ? e.message : 'Erro desconhecido';
        out.push({ email: u.email, role: u.role, status: 'error', message });
      }
    }
    setResults(out);
    setRunning(false);
  }

  useEffect(() => {
    run();
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Criar usuários de teste (DEV)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Esta página só existe em desenvolvimento. Cria três contas: Migrante, Empresa e CPC (admin).
          </p>

          <div className="mb-4">
            <Button onClick={run} disabled={running}>
              {running ? 'A criar...' : 'Recriar usuários de teste'}
            </Button>
          </div>

          <div className="space-y-2">
            {results.map((r) => (
              <div key={r.email} className="flex items-center justify-between rounded-md border p-3">
                <div className="space-y-1">
                  <div className="font-mono text-sm">{r.email}</div>
                  <div className="text-xs text-muted-foreground">role: {r.role}</div>
                </div>
                <div className="text-sm">
                  {r.status === 'created' && <span className="text-green-600">criado</span>}
                  {r.status === 'exists' && <span className="text-amber-600">já existe</span>}
                  {r.status === 'error' && <span className="text-red-600">erro: {r.message}</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm">
            <div className="font-semibold mb-2">Credenciais de teste</div>
            <ul className="space-y-1 font-mono">
              <li>migrante.teste@local.test / Teste1234!</li>
              <li>empresa.teste@local.test / Teste1234!</li>
              <li>cpc.admin@local.test / Teste1234!</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
