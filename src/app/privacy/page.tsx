import { Card } from '@/components/ui/card'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: December 2024</p>
          </div>

          <Card className="p-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 gradient-text">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Olanozun Maria Raiwe&apos;s website. I respect your privacy and am committed to protecting 
                  your personal data. This privacy policy will inform you about how I look after your 
                  personal data when you visit my website and tell you about your privacy rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 gradient-text">Data I Collect</h2>
                <p className="text-gray-700 leading-relaxed">
                  I may collect, use, store, and transfer different kinds of personal data about you, including:
                </p>
                <ul className="text-gray-700 list-disc list-inside space-y-2 mt-4">
                  <li><strong>Identity Data:</strong> First name, last name, username, or similar identifier</li>
                  <li><strong>Contact Data:</strong> Email address, telephone numbers</li>
                  <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting and location</li>
                  <li><strong>Usage Data:</strong> Information about how you use my website and services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 gradient-text">How I Use Your Data</h2>
                <p className="text-gray-700 leading-relaxed">
                  I will only use your personal data when the law allows me to. Most commonly, I will use your 
                  personal data in the following circumstances:
                </p>
                <ul className="text-gray-700 list-disc list-inside space-y-2 mt-4">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To send you marketing communications (where you have requested them)</li>
                  <li>To improve my website and services</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 gradient-text">Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  I have put in place appropriate security measures to prevent your personal data from being 
                  accidentally lost, used, or accessed in an unauthorized way. I limit access to your personal 
                  data to those who have a genuine business need to know it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 gradient-text">Your Legal Rights</h2>
                <p className="text-gray-700 leading-relaxed">
                  Under certain circumstances, you have rights under data protection laws in relation to your 
                  personal data, including the right to:
                </p>
                <ul className="text-gray-700 list-disc list-inside space-y-2 mt-4">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Right to withdraw consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 gradient-text">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this privacy policy or my privacy practices, please contact me at:
                </p>
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> hello@nozun.io<br/>
                    <strong>Website:</strong> https://olanozun.com/contact
                  </p>
                </div>
              </section>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}