import React from 'react';
import { Check, Clock, FileText, CheckCircle, XCircle, DollarSign } from 'lucide-react';
import { ProcessStep } from '../types';

const ProcessFlow: React.FC = () => {
  const processSteps: ProcessStep[] = [
    {
      id: '1',
      title: 'Claim Submitted',
      status: 'completed',
      date: new Date('2024-02-01')
    },
    {
      id: '2',
      title: 'Initial Review',
      status: 'completed',
      date: new Date('2024-02-02')
    },
    {
      id: '3',
      title: 'Medical Review',
      status: 'current'
    },
    {
      id: '4',
      title: 'Final Approval',
      status: 'pending'
    },
    {
      id: '5',
      title: 'Payment Processing',
      status: 'pending'
    }
  ];

  const getStepIcon = (step: ProcessStep, index: number) => {
    if (step.status === 'completed') {
      return <Check className="w-5 h-5 text-white" />;
    } else if (step.status === 'current') {
      return <Clock className="w-5 h-5 text-white" />;
    } else {
      return <span className="text-white font-medium">{index + 1}</span>;
    }
  };

  const getStepColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'current':
        return 'bg-blue-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Process Flow</h1>
        <p className="text-gray-600 mt-2">Track the status and flow of insurance claims through the review process</p>
      </div>

      {/* Process Flow Diagram */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-8">Claim Processing Workflow</h2>
        
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-8 left-8 right-8 h-0.5 bg-gray-200">
            <div 
              className="h-full bg-blue-500 transition-all duration-500"
              style={{ width: '40%' }}
            />
          </div>

          {/* Steps */}
          <div className="relative flex justify-between">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${getStepColor(step.status)} transition-colors shadow-lg`}
                >
                  {getStepIcon(step, index)}
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-medium text-gray-900">{step.title}</h3>
                  {step.date && (
                    <p className="text-sm text-gray-500 mt-1">
                      {step.date.toLocaleDateString()}
                    </p>
                  )}
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full mt-2 ${
                    step.status === 'completed' ? 'bg-green-100 text-green-800' :
                    step.status === 'current' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {step.status === 'completed' ? 'Completed' :
                     step.status === 'current' ? 'In Progress' : 'Pending'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Status</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Medical Review</p>
                <p className="text-sm text-gray-600">Your claim is currently under medical review</p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Estimated completion:</strong> 2-3 business days
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Steps</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-xs font-medium text-gray-600">4</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Final Approval</p>
                <p className="text-sm text-gray-600">Final review and approval decision</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-xs font-medium text-gray-600">5</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Payment Processing</p>
                <p className="text-sm text-gray-600">Process approved payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Legend */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Legend</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Completed</p>
              <p className="text-sm text-gray-600">Step has been finished</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-medium text-gray-900">In Progress</p>
              <p className="text-sm text-gray-600">Currently being processed</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">•</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Pending</p>
              <p className="text-sm text-gray-600">Waiting to be processed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
