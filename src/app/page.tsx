import Hero from './components/Hero'
import ShipmentDelayFlow from './components/ShipmentDelayFlow'

export default function HomePage() {
    return (
        <main className="flex w-full flex-col items-center">
            <Hero />
            <ShipmentDelayFlow />
        </main>
    )
}
