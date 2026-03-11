'use client';

import { useState } from 'react';
import { useFraudDetection, useFraudProfile } from '@/hooks/useFraudDetection';
import { FraudScoreDisplay, FraudScoreBadge } from '@/components/FraudScoreBadge';

export default function FraudDetectionDemo() {
  const [walletAddress, setWalletAddress] = useState('');
  const [fraudResult, setFraudResult] = useState<any>(null);
  const [profileData, setProfileData] = useState<any>(null);
  
  const { checkFraud, isChecking } = useFraudDetection();
  const { getFraudProfile, isLoading } = useFraudProfile();

  const handleCheckFraud = async () => {
    const result = await checkFraud({
      walletAddress,
      requestedAmount: 500,
      maxEligible: 1000,
      loanPurpose: 'Business expansion',
      walletAge: 30,
      totalTransactions: 10,
      previousLoans: 2,
      successfulRepayments: 2,
      circleCount: 1,
    });
    setFraudResult(result);
  };

  const handleGetProfile = async () => {
    const profile = await getFraudProfile(walletAddress);
    setProfileData(profile);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            🛡️ AI Fraud Detection Demo
          </h1>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Wallet Address
            </label>
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="0x..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={handleCheckFraud}
              disabled={!walletAddress || isChecking}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isChecking ? 'Checking...' : '🔍 Check Fraud Score'}
            </button>

            <button
              onClick={handleGetProfile}
              disabled={!walletAddress || isLoading}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'Loading...' : '👤 Get Profile'}
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {fraudResult && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Fraud Analysis Results</h2>
              
              <div className="mb-4">
                <FraudScoreBadge 
                  score={fraudResult.fraudScore} 
                  riskLevel={fraudResult.riskLevel}
                  size="lg"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Recommendation:</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    fraudResult.recommendation === 'approve' ? 'bg-green-100 text-green-800' :
                    fraudResult.recommendation === 'block' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {fraudResult.recommendation.toUpperCase()}
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Explanation:</h3>
                  <p className="text-gray-700 text-sm">{fraudResult.explanation}</p>
                </div>

                {fraudResult.riskFactors && fraudResult.riskFactors.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Risk Factors:</h3>
                    <ul className="space-y-2">
                      {fraudResult.riskFactors.map((factor: any, idx: number) => (
                        <li key={idx} className="text-sm text-red-600 flex items-start gap-2">
                          <span className="mt-0.5">⚠️</span>
                          <span>{factor.evidence} (+{factor.points} points)</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {fraudResult.trustFactors && fraudResult.trustFactors.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Trust Factors:</h3>
                    <ul className="space-y-2">
                      {fraudResult.trustFactors.map((factor: any, idx: number) => (
                        <li key={idx} className="text-sm text-green-600 flex items-start gap-2">
                          <span className="mt-0.5">✓</span>
                          <span>{factor.evidence} ({factor.points} points)</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 border-t">
                  <p className="text-xs text-gray-500">
                    AI Confidence: {fraudResult.confidence}%
                  </p>
                </div>
              </div>
            </div>
          )}

          {profileData && profileData.exists && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">User Fraud Profile</h2>
              
              <FraudScoreDisplay
                score={profileData.fraudScore}
                riskLevel={profileData.riskLevel}
                isVerified={profileData.isVerified}
                verificationBonus={profileData.verificationBonus}
              />

              {profileData.isFlagged && (
                <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-red-800 font-medium">
                    ⚠️ Account Flagged for Review
                  </p>
                  <p className="text-red-600 text-sm mt-1">
                    This account has been flagged due to high-risk indicators.
                  </p>
                </div>
              )}

              <div className="mt-4 text-xs text-gray-500">
                Last checked: {new Date(profileData.lastChecked).toLocaleString()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
