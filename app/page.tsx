import Navbar from '@/components/navbar'
import Image from 'next/image'
import { redirect } from 'next/navigation';


export default function Home({params}) {
  redirect('/landing')
} 
