function showSignUpForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('forgotPasswordForm').style.display = 'none';
    document.getElementById('verificationForm').style.display = 'none';
    document.getElementById('resetPasswordForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('forgotPasswordForm').style.display = 'none';
    document.getElementById('verificationForm').style.display = 'none';
    document.getElementById('resetPasswordForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function showForgotPasswordForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('verificationForm').style.display = 'none';
    document.getElementById('resetPasswordForm').style.display = 'none';
    document.getElementById('forgotPasswordForm').style.display = 'block';
}

function showVerificationForm() {
    document.getElementById('forgotPasswordForm').style.display = 'none';
    document.getElementById('verificationForm').style.display = 'block';
}

function showResetPasswordForm() {
    document.getElementById('verificationForm').style.display = 'none';
    document.getElementById('resetPasswordForm').style.display = 'block';
}