import { Fragment, FC } from 'react';
import Navigation from './navigation'

const Header: FC = () => {
    return (
        <Fragment>
            <header>
                <p>header</p>
                <Navigation />
            </header>
        </Fragment>
    );
}

export default Header;
