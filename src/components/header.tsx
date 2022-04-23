import { Fragment, FC } from 'react';
import Navigation from 'src/components/navigation'
import TitleImage from 'src/assets/images/title.png'

const Header: FC = () => {
    return (
        <Fragment>
            <header className='bg-gray-200'>
                <img src={TitleImage} alt="hidamari" className="w-1/4" />
                <Navigation />
            </header>
        </Fragment>
    );
}

export default Header;
