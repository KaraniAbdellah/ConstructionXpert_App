import React from 'react';

const Auth = () => {
  return (
    <div className="min-h-screen bg-zinc-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-zinc-800 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">MediWise</h1>
            <p className="text-zinc-300 mt-1">Dossier Médical Électronique</p>
          </div>
          
          {/* Main Content Area */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Login Section */}
              <div className="border border-zinc-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-zinc-800 mb-4">Connexion</h2>
                <p className="text-zinc-600 mb-6">Entrez vos identifiants pour accéder à votre compte</p>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" 
                      placeholder="email@example.com"
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium text-zinc-700">Mot de passe</label>
                      <a href="#" className="text-sm text-zinc-500 hover:text-zinc-700">Mot de passe oublié?</a>
                    </div>
                    <input 
                      type="password" 
                      id="password" 
                      className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500" 
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      id="remember-me" 
                      name="remember-me" 
                      type="checkbox" 
                      className="h-4 w-4 text-zinc-600 focus:ring-zinc-500 border-zinc-300 rounded" 
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-zinc-700">Se souvenir de moi</label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
                  >
                    Se connecter
                  </button>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-zinc-600">
                    Pour une démonstration sans inscription:
                    <a href="#" className="ml-1 font-medium text-zinc-600 hover:text-zinc-500">Explorer la démo</a>
                  </p>
                </div>
              </div>
              
              {/* Features Section */}
              <div className="bg-zinc-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-zinc-800 mb-4">Votre pratique médicale, simplifiée</h2>
                <p className="text-zinc-600 mb-6">MediWise vous permet de gérer tous vos dossiers patients dans un environnement sécurisé accessible depuis n'importe où.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-zinc-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-zinc-900">Accès sécurisé</h3>
                      <p className="mt-1 text-sm text-zinc-500">Vos données sont cryptées et protégées selon les standards RGPD et HIPAA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-zinc-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-zinc-900">Tout-en-un</h3>
                      <p className="mt-1 text-sm text-zinc-500">Consultations, analyses, imagerie et prescriptions dans une interface unifiée</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-zinc-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-zinc-900">Intelligence</h3>
                      <p className="mt-1 text-sm text-zinc-500">Assistance IA pour l'analyse des résultats et le suivi des tendances</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-zinc-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-zinc-900">Collaboration</h3>
                      <p className="mt-1 text-sm text-zinc-500">Partagez les informations médicales avec les autres professionnels de santé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;