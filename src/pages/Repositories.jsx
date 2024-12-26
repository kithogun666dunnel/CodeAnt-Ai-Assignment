import { useState, useEffect } from 'react';
import {
  ArrowPathIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  CircleStackIcon
} from "@heroicons/react/24/outline";
import Layout from "../components/Layout";

export default function Repositories() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const GITHUB_USERNAME = 'kithogun666dunnel';

  useEffect(() => {
    fetchRepositories();
  }, []);

  const fetchRepositories = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
      );
      const data = await response.json();
      setRepositories(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching repositories:', error);
      setLoading(false);
    }
  };

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <div className="p-2">
        <div className="flex flex-col bg-white border rounded-xl w-full">
          <div className="flex flex-col gap-4 p-4 border-b">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-col">
                <span className="font-semibold text-xl">Repositories</span>
                <span className="font-light text-sm">
                  {repositories.length} total repositories
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={fetchRepositories}
                  className="flex items-center gap-2 hover:bg-gray-50 px-4 p-2 border rounded-md text-xs"
                >
                  <ArrowPathIcon className="size-4" />
                  Refresh All
                </button>
                <button className="flex items-center gap-2 bg-[#1570EF] px-4 p-2 rounded-md text-white text-xs">
                  <PlusIcon className="size-4" />
                  Add Repository
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="inputSearch" className="flex items-center gap-2 px-2 py-2 border rounded-md w-fit">
                <MagnifyingGlassIcon className="size-4 stroke-2" />
                <input
                  id="inputSearch"
                  placeholder="Search Repositories"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-[200px] text-xs placeholder:text-gray-700 outline-none"
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col w-full">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="border-b-2 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
              </div>
            ) : filteredRepositories.length >= 1 ? (
              filteredRepositories.map((repo, index) => (
                <div
                  key={repo.id}
                  className={`flex flex-col p-4 gap-3 hover:bg-gray-100 ${index !== filteredRepositories.length - 1 ? 'border-b' : ''
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[#1570EF] hover:underline">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                      </a>
                    </span>
                    <span className={`bg-[#EFF8FF] border border-[#B2DDFF] text-[#1570EF] text-xs px-2 rounded-full`}>
                      {repo.private ? 'Private' : 'Public'}
                    </span>
                  </div>
                  <div className="flex gap-4 md:gap-8 font-light text-sm">
                    {repo.language && (
                      <span className="flex items-center gap-2">
                        {repo.language}
                        <span className={`bg-[#1570EF] w-2 h-2 rounded-full`}></span>
                      </span>
                    )}
                    <span className="flex items-center gap-2">
                      <CircleStackIcon className="w-4" />
                      {(repo.size / 1024).toFixed(2)} MB
                    </span>
                    <span>
                      Updated {new Date(repo.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col gap-3 p-4 border-b text-center text-gray-500">
                No repositories found.
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}