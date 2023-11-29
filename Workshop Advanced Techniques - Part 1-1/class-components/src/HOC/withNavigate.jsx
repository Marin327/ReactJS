import { useNavigate } from 'react-router-dom';

const withNavigate = (Component) => {
    const ComponentWithNavigate = (props) => {
        const navigate = useNavigate();

        return <Component {...props} navigate={navigate} />
    }

    return ComponentWithNavigate;
}

export default withNavigate;
