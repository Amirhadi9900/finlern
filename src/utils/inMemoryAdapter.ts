/**
 * Simple in-memory adapter for NextAuth.js that can be used in development
 * This is not suitable for production use.
 */
const users = new Map();
const accounts = new Map();
const sessions = new Map();
const verificationTokens = new Map();

export const InMemoryAdapter = () => {
  return {
    async createUser(user: any) {
      const id = crypto.randomUUID();
      users.set(id, { ...user, id });
      return users.get(id);
    },
    async getUser(id: string) {
      return users.get(id) || null;
    },
    async getUserByEmail(email: string) {
      return Array.from(users.values()).find(
        (user: any) => user.email === email
      ) || null;
    },
    async getUserByAccount({ providerAccountId, provider }: any) {
      const account = Array.from(accounts.values()).find(
        (account: any) =>
          account.providerAccountId === providerAccountId &&
          account.provider === provider
      );
      if (!account) return null;
      return users.get(account.userId) || null;
    },
    async updateUser(user: any) {
      users.set(user.id, user);
      return user;
    },
    async deleteUser(userId: string) {
      users.delete(userId);
      return;
    },
    async linkAccount(account: any) {
      const id = crypto.randomUUID();
      accounts.set(id, { ...account, id });
      return accounts.get(id);
    },
    async unlinkAccount({ providerAccountId, provider }: any) {
      const account = Array.from(accounts.values()).find(
        (account: any) =>
          account.providerAccountId === providerAccountId &&
          account.provider === provider
      );
      if (!account) return;
      accounts.delete(account.id);
      return;
    },
    async createSession(session: any) {
      const id = crypto.randomUUID();
      sessions.set(id, { ...session, id });
      return sessions.get(id);
    },
    async getSessionAndUser(sessionToken: string) {
      const session = Array.from(sessions.values()).find(
        (session: any) => session.sessionToken === sessionToken
      );
      if (!session) return null;
      const user = users.get(session.userId);
      if (!user) return null;
      return { session, user };
    },
    async updateSession(session: any) {
      const { id } = Array.from(sessions.values()).find(
        (s: any) => s.sessionToken === session.sessionToken
      ) || { id: crypto.randomUUID() };
      sessions.set(id, { ...session, id });
      return sessions.get(id);
    },
    async deleteSession(sessionToken: string) {
      const session = Array.from(sessions.values()).find(
        (session: any) => session.sessionToken === sessionToken
      );
      if (!session) return;
      sessions.delete(session.id);
      return;
    },
    async createVerificationToken(verificationToken: any) {
      verificationTokens.set(verificationToken.identifier, verificationToken);
      return verificationToken;
    },
    async useVerificationToken({ identifier, token }: any) {
      const verificationToken = verificationTokens.get(identifier);
      if (!verificationToken || verificationToken.token !== token) return null;
      verificationTokens.delete(identifier);
      return verificationToken;
    },
  };
};

export default InMemoryAdapter; 