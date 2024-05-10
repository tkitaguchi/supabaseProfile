import { createBrowserClient } from '@supabase/ssr';

export const supabaseBrowserClient = createBrowserClient( //constructor
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string // passing keys to talk to supabase
);
