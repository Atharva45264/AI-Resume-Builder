import { SignIn } from '@clerk/clerk-react';

function SignInPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full">
        <SignIn/>
      </div>
    </div>
  );
}

export default SignInPage;
