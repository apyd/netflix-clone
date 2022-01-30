import HeroMedia from '../../components/HeroMedia/HeroMedia';
import { useMediaDetails } from '../../hooks/useMediaDetails';
import { mediaType } from '../../api/api';


const HomeScreen = () => {
    const id = 425909;
    const details = useMediaDetails(mediaType.movie, id);

    return <div className="homeScreen">
        {details && <HeroMedia {...details} />}
    </div>;
}

export default HomeScreen;