import { useEffect, useState } from 'react'

// components
import WorkoutDetails from '../components/WorkoutDetails' 
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    const [workouts, setWorkouts] = useState(null)
    
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            // array of workout objects
            const json = await response.json()

            if ( response.ok ) {
                // update local states
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    }, []) // fire only once when component renders
    
    return (
        <div className="home">   
            <div className='workouts'>
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home