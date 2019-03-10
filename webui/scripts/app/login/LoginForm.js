import React, {Component} from 'react';

const Time = () => {
    return $(document).ready(function() {
        var today = new Date().toDateString();
        $('.today').html(today);
    })
};

class LoginForm extends Component {
    render() {
        return (
            <form>
                <input name="login"/>
                <input name="password"/>
            </form>
        );
    }
}

export default LoginForm;