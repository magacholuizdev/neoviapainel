import { setCookie, destroyCookie, parseCookies } from "nookies";

const cookieParams = { secure: true, sameSite: "Strict" };
const RECORD_KEY = "_@records";
const CTX = null;

const store = {
  save(key: string, value: any) {
    if (value !== undefined) {
      persist(key, value);
      register(key);
    }
  },

  get<T>(key: string): T | undefined {
    const cookies = parseCookies(CTX);
    if (cookies[key] !== undefined) {
      return JSON.parse(cookies[key]) as T;
    }
  },

  delete(key: string) {
    destroyCookie(CTX, key);
    unregister(key);
  },

  exists(key: string): boolean {
    const cookies = parseCookies(CTX);
    if (cookies[key]) {
      return true;
    }

    return false;
  },

  cleanAll() {
    const records = getRecords();
    records.forEach((key) => {
      destroyCookie(CTX, key);
    });

    destroyCookie(CTX, RECORD_KEY);
  },
};

function persist(key: string, value: any) {
  setCookie(CTX, key, JSON.stringify(value), cookieParams);
}

function register(key: string) {
  const records = getRecords();
  records.add(key);
  persist(RECORD_KEY, Array.from(records));
}

function unregister(key: string) {
  const records = getRecords();
  records.delete(key);
  persist(RECORD_KEY, Array.from(records));
}

function getRecords() {
  const records = store.get(RECORD_KEY) as string[];
  if (records) {
    if (Object.keys(records).length > 0)
      return new Set<string>(records as string[]);
  }

  return new Set<string>();
}

export default store;
