"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import { HISTORY } from './history/page'
import { eq } from 'drizzle-orm'    

function UsageTrack() {

    const { user } = useUser();

    useEffect(() => {
        user && GetData();
    }, [user])

    const GetData = async () => {
        {/*@ts-ignore*/ }
        const result: HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

        GetTotalUsage(result)
    }


    const GetTotalUsage = (result: HISTORY[]) => {
        let total: number = 0;
        result.forEach(element => {
            total = total + Number(element.aiResponse?.length)
        });

        console.log(total);
    }

    return (
        <div className='m-5'>
            <div className='bg-primary p-3 rounded-md text-white'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-[#005AA7] w-full rounded-full mt-3'>
                    <div className='h-2 bg-white rounded-full' style={{ width: '30%' }}>

                    </div>
                </div>
                <h2 className='text-sm'>3000/10,000 Credits Used</h2>
            </div>
            <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
        </div>
    )
}

export default UsageTrack