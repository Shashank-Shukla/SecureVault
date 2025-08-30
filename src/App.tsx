import React, { useState } from 'react';
import { 
  Shield, 
  Cloud, 
  Smartphone, 
  BarChart3, 
  Settings, 
  Download,
  Upload,
  CheckCircle,
  AlertCircle,
  Clock,
  HardDrive,
  Wifi,
  Battery
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import BackupSettings from './components/BackupSettings';
import DeviceManagement from './components/DeviceManagement';
import Reports from './components/Reports';

type TabType = 'dashboard' | 'devices' | 'settings' | 'reports';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  const tabs = [
    { id: 'dashboard' as TabType, label: 'Dashboard', icon: BarChart3 },
    { id: 'devices' as TabType, label: 'Devices', icon: Smartphone },
    { id: 'settings' as TabType, label: 'Settings', icon: Settings },
    { id: 'reports' as TabType, label: 'Reports', icon: Download },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'devices':
        return <DeviceManagement />;
      case 'settings':
        return <BackupSettings />;
      case 'reports':
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">SecureVault</h1>
                <p className="text-xs text-slate-500">Automated Backup System</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-slate-700">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <nav className="bg-white rounded-xl shadow-sm border border-slate-200 p-2">
              <div className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Quick Stats Card */}
            <div className="mt-6 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <HardDrive className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-600">Total Backed Up</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">2.4 TB</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-600">Active Devices</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-600">Last Backup</span>
                  </div>
                  <span className="text-sm font-semibold text-green-600">2h ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;