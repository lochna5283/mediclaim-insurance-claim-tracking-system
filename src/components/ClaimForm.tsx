import React, { useState } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';
import { mockEmployees } from '../Data/mockData';

const ClaimForm: React.FC = () => {
  const [formData, setFormData] = useState({
    employeeId: '',
    claimPersonName: '',
    relation: '',
    relationMaidNo: '',
    hospital: '',
    billNo: '',
    billDate: '',
    billAmount: '',
    documents: [
      {
        header: '',
        amount: '',
        doctorName: '',
        pages: '',
      }
    ]
  });

  const relationOptions = [
    'SELF', 'WIFE', 'SON 1', 'SON 2', 'DAUGHTER 1', 'DAUGHTER 2', 'FATHER', 'MOTHER'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDocumentChange = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.map((doc, i) => 
        i === index ? { ...doc, [field]: value } : doc
      )
    }));
  };

  const addDocument = () => {
    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents, { header: '', amount: '', doctorName: '', pages: '' }]
    }));
  };

  const removeDocument = (index: number) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Claim submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900">Submit New Claim</h2>
          <p className="text-gray-600 mt-1">Fill in the details to submit a medical insurance claim</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Employee Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Employee Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Employee</label>
                <select
                  value={formData.employeeId}
                  onChange={(e) => handleInputChange('employeeId', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Employee</option>
                  {mockEmployees.map(emp => (
                    <option key={emp.id} value={emp.id}>
                      {emp.name} - {emp.maidNo} ({emp.type})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Claim Person Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Claim Person Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Person Name</label>
                <input
                  type="text"
                  value={formData.claimPersonName}
                  onChange={(e) => handleInputChange('claimPersonName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Relation</label>
                <select
                  value={formData.relation}
                  onChange={(e) => handleInputChange('relation', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Relation</option>
                  {relationOptions.map(relation => (
                    <option key={relation} value={relation}>{relation}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Relation MAID No.</label>
                <input
                  type="text"
                  value={formData.relationMaidNo}
                  onChange={(e) => handleInputChange('relationMaidNo', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>

          {/* Bill Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Bill Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hospital</label>
                <input
                  type="text"
                  value={formData.hospital}
                  onChange={(e) => handleInputChange('hospital', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bill No.</label>
                <input
                  type="text"
                  value={formData.billNo}
                  onChange={(e) => handleInputChange('billNo', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bill Date</label>
                <input
                  type="date"
                  value={formData.billDate}
                  onChange={(e) => handleInputChange('billDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bill Amount</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.billAmount}
                  onChange={(e) => handleInputChange('billAmount', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>

          {/* Documents */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Documents</h3>
              <button
                type="button"
                onClick={addDocument}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Document</span>
              </button>
            </div>
            
            {formData.documents.map((doc, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-md font-medium text-gray-800">Document {index + 1}</h4>
                  {formData.documents.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeDocument(index)}
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Document Header</label>
                    <input
                      type="text"
                      value={doc.header}
                      onChange={(e) => handleDocumentChange(index, 'header', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                    <input
                      type="number"
                      step="0.01"
                      value={doc.amount}
                      onChange={(e) => handleDocumentChange(index, 'amount', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Doctor Name</label>
                    <input
                      type="text"
                      value={doc.doctorName}
                      onChange={(e) => handleDocumentChange(index, 'doctorName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">No. of Pages</label>
                    <input
                      type="number"
                      value={doc.pages}
                      onChange={(e) => handleDocumentChange(index, 'pages', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-6 border-t border-gray-100">
            <button
              type="submit"
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Submit Claim</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClaimForm;