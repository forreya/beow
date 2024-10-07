import RadioModal from "../components/RadioModal";

const HomePage = () => {
    return (
        <div>
            <h1 className="text-6xl font-oldComputer">HEADER</h1>
            <RadioModal
                title = "Everybody Wants To Be A Cat"
                artist = "Bloncs"
                duration = {30}
                currentTime = {10}
            />
        </div>
    )
}

export default HomePage;