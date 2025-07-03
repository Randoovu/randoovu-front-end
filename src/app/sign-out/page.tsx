"use server"

import { cookies } from 'next/headers'
import Redirect from './redirect';

export default async function signOut() {
    const cookieStore = await cookies()
    cookieStore.delete("token");

    return <Redirect />;
}