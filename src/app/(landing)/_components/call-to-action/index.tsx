import GradientText from '@/components/global/gradient-text'
import { Button } from '@/components/ui/button'
import { BadgePlus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const CallToAction = (props: Props) => {
  return (
    <div className='flex flex-col items-start md:items-center gap-y-5 md:gap-y-0'>
        <GradientText 
            className='text-[45px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-light font-semibold mb-4'
            element='H1'>
                Bringing Communities <br  className='md:hidden'/> Together
        </GradientText>
        <p className='text-sm md:text-center text-left text-muted-foreground'>
            ClickWork is a vibrant online community platform that empowers 
            <br className='md:hidden' /> people to apply,
             <br className='md:hidden' /> find and work smart
            
        </p>
        <div className='flex md:flex-row flex-col md:justify-center gap-5 md:mt-5 w-full'>
            <Button
            variant="outline"
            className='rounded-xl bg-transparent text-base'
            >
                Watch Demo
            </Button>
            <Link href="/sign-in">
                <Button className='rounded-xl text-base flex gap-2 w-full'>
                    <BadgePlus /> Start here
                </Button>
            </Link>
        </div>
        
    </div>
  )
}

export default CallToAction