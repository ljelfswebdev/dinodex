import {useState} from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Score = () => {
    const [home, setHome] = useState(0);
    const [away, setAway] = useState(0);

    return ( 
        <div>
            <div className='Dinodex Dinodex-cards'>
                <div className='p-8'>
                    <h1 className={styles.description}>Player 1 Score = <span className='font-bold text-2xl'>{home}</span> </h1>
                    <div className='mt-2'>
                        <button onClick={() => setHome(home+1)}className="bg-green2 hover:bg-green hover:text-green2 text-green font-bold py-2 px-4 mb-2 rounded-full">+1</button>
                        <button onClick={() => setHome(0)}className="bg-red hover:bg-orange hover:text-red text-white font-bold py-2 px-4 mb-2 rounded-full">Reset</button>
                    </div>    
                </div>
                
                <div className='p-8'>
                    <h1 className={styles.description}>Player 2 Score = <span className='font-bold text-2xl'>{away}</span> </h1>
                    <div className='mt-2'>
                        <button onClick={() => setAway(away+1)} className="bg-green hover:bg-green2 hover:text-green text-green2 font-bold py-2 px-4 mb-2 rounded-full">+1</button>
                        <button onClick={() => setAway(0)}className="bg-red hover:bg-orange hover:text-red text-white font-bold py-2 px-4 mb-2 rounded-full">Reset</button> 
                    </div>  
                </div>
                <div>
                </div>
            </div>
            <div className='Dinodex Dinodex-cards'>
            <Link href="/game">
                <button className="bg-blue hover:bg-blue2 hover:text-blue text-white font-bold py-2 px-4 mb-2 rounded-full">New Game</button>
            </Link>
            </div>
        </div>
        
     );
}
 
export default Score;