import { useState } from 'react';
import { ArrowLongUpIcon } from "@heroicons/react/24/solid";
import githubLogo from '../assets/github-image.png';
import bitbucketLogo from '../assets/bitBucketLogo.png';
import azureLogo from '../assets/Azure-logo.png';
import gitlabLogo from '../assets/gitlabLogo.png';
import bigLogo from '../assets/bigLogo.png';
import codeAntLogo from '../assets/codeAnt-logo.png';
import key from '../assets/key.png';

export default function SignIn() {
  const [isSaas, setIsSaas] = useState(true);

  return (
    <div className="flex justify-center gap-2 w-full">
      {/* Left Half */}
      <div className="relative md:flex flex-col justify-center items-center hidden bg-white border-r w-1/2 h-full">
        <img
          src={bigLogo}
          alt="logo"
          className="bottom-0 left-0 absolute opacity-8 w-[300px] aspect-square"
        />
        <div className="flex flex-col shadowCardAuth rounded-xl w-full max-w-[500px]">
          <div className="flex items-center gap-2 p-4 border-b">
            <img src={codeAntLogo} alt="logo" className="w-6 h-6" />
            <span className="font-semibold">AI to Detect & Autofix Bad Code</span>
          </div>
          <div className="flex justify-between items-center gap-4 p-4">
            <div className="flex flex-col items-center">
              <span className="font-semibold">30+</span>
              <span className="text-sm">Language Support</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold">10K+</span>
              <span className="text-sm">Developers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold">100K+</span>
              <span className="text-sm">Hours Saved</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 bg-white shadowCardAuth px-8 p-4 rounded-xl -translate-y-[10px] translate-x-[50%]">
          <div className="flex justify-between min-w-40">
            <div className="flex justify-center items-center bg-[#E8E9FF] rounded-full w-10 h-10">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="#6366F1">
                <path d="M8 1.333c-3.683 0-6.667 2.984-6.667 6.667s2.984 6.667 6.667 6.667 6.667-2.984 6.667-6.667-2.984-6.667-6.667-6.667zM8 13.333c-2.94 0-5.333-2.393-5.333-5.333s2.393-5.333 5.333-5.333 5.333 2.393 5.333 5.333-2.393 5.333-5.333 5.333z" />
                <path d="M8 1.333v6.667l5.773 3.333" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center text-[#1570EF]">
                <ArrowLongUpIcon className="w-5" />
                14%
              </div>
              <div className="font-light text-xs">
                This week
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <span className="font-semibold">Issues Fixed</span>
              <span className="font-semibold text-2xl">500K+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Half */}
      <div className="position-absolute flex flex-col justify-center items-center gap-4 p-4 w-full md:w-1/2 max-w-[400px] md:max-w-full">
        <div className="flex flex-col bg-white border rounded-xl w-full">
          <div className="flex flex-col gap-4 p-5 border-b w-full">
            <div className="flex justify-center items-center gap-4">
              <img src={codeAntLogo} alt="logo" className="h-[33px]" />
              <span className="font-['Satoshi'] font-[400] text-[#181D27] text-[30px] leading-[33px]">
                CodeAnt AI
              </span>
            </div>
            <div className="flex justify-center mt-2 font-semibold text-2xl">
              Welcome to CodeAnt AI
            </div>
            <div>
              <div className="bg-gray-100/70 border rounded-xl">
                <button
                  className={`p-3 rounded-xl w-1/2 ${isSaas ? 'bg-[#1570EF] text-white' : ''}`}
                  onClick={() => setIsSaas(true)}
                >
                  SAAS
                </button>
                <button
                  className={`p-3 rounded-xl w-1/2 ${!isSaas ? 'bg-[#1570EF] text-white' : ''}`}
                  onClick={() => setIsSaas(false)}
                >
                  Self Hosted
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-5">
            <div className="flex justify-center items-center w-full">
              {isSaas ? (
                <div className="flex flex-col justify-center items-center gap-2 w-full max-w-[400px]">
                  <a href="/repositories" className="flex justify-center items-center gap-3 hover:bg-gray-50 p-2 border rounded-xl w-full">
                    <img src={githubLogo} alt="github" className="w-5" />
                    Sign in with Github
                  </a>
                  <a href="/repositories" className="flex justify-center items-center gap-3 hover:bg-gray-50 p-2 border rounded-xl w-full">
                    <img src={bitbucketLogo} alt="bitbucket" className="w-5" />
                    Sign in with Bitbucket
                  </a>
                  <a href="/repositories" className="flex justify-center items-center gap-3 hover:bg-gray-50 p-2 border rounded-xl w-full">
                    <img src={azureLogo} alt="azure-devops" className="w-5" />
                    Sign in with Azure DevOps
                  </a>
                  <a href="/repositories" className="flex justify-center items-center gap-3 hover:bg-gray-50 p-2 border rounded-xl w-full">
                    <img src={gitlabLogo} alt="gitlab" className="w-5" />
                    Sign in with GitLab
                  </a>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center gap-2 w-full max-w-[400px]">
                  <a href="/repositories" className="flex justify-center items-center gap-3 hover:bg-gray-50 p-2 border rounded-xl w-full">
                    <img src={gitlabLogo} alt="gitlab" className="w-5" />
                    Self Hosted GitLab
                  </a>
                  <a href="/repositories" className="flex justify-center items-center gap-3 hover:bg-gray-50 p-2 border rounded-xl w-full">
                    <img src={key} alt="SSO" className="w-5" />
                    Sign in with SSO
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <span className="text-sm">
            By signing up you agree to the <b>Privacy Policy</b>
          </span>
        </div>
      </div>
    </div>
  );
}