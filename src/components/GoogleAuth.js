import React from 'react';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '758226845557-9dqdg33a1f36h39r58p66rnullbhqb80.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return (
            <div>Google Auth</div>
        );
    }
}

export default GoogleAuth;