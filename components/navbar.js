import Link from "next/link";


export default function NavBar(){

    return(
        <nav>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/timer'}>Timer</Link></li>
                <li><Link href={'/calendar'}>Calendar</Link></li>
                <li><Link href={'/todolist'}>Todo List</Link></li>
            </ul>
        </nav>
    );
}