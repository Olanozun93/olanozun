import { Card } from '@/components/ui/card'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Terms of Service</h1>
            <p className="text-gray-600">Last updated: December 2024</p>
          </div>

          <Card className="p-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 gradient-text">Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and 
                  provision of this agreement. If you do not agree to abide by the above, please do not use this site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 gradient-text">Use License</h2>
                <p className="text-gray-700 leading-relaxed">
                  Permission is granted to temporarily view the materials on Olanozun Maria Raiwe&apos;s website for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                  and under this license you may not:
                </p>
                <ul className="text-gray-700 list-disc list-inside space-y-2 mt-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 gradient-text">Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  The materials on Olanozun Maria Raiwe&apos;s website are provided on an &apos;as is&apos; basis. Olanozun Maria  Raiwe makes no warranties, 
                  expressed or implied, and hereby disclaims and negates all other warranties including, without 
                  limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
                  or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 gradient-text">Limitations</h2>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall Olanozun Maria  Raiwe or her suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or 
                  inability to use the materials on this website, even if Olanozun Maria  Raiwe or an authorized representative 
                  has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 gradient-text">Accuracy of Materials</h2>
                <p className="text-gray-700 leading-relaxed">
                  The materials appearing on this website could include technical, typographical, or photographic 
                  errors. Olanozun Maria  Raiwe does not warrant that any of the materials on its website are accurate, complete, 
                  or current. Changes may be made to the materials contained on the website at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 gradient-text">Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Olanozun Maria  Raiwe has not reviewed all of the sites linked to its website and is not responsible for the 
                  contents of any such linked site. The inclusion of any link does not imply endorsement by Olanozun Maria  Raiwe 
                  of the site. Use of any such linked website is at the user&apos;s own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 gradient-text">Modifications</h2>
                <p className="text-gray-700 leading-relaxed">
                  Olanozun Maria Raiwe may revise these terms of service for its website at any time without notice. By using 
                  this website you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 gradient-text">Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the United 
                  States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}