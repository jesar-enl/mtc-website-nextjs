import DevelopmentMessage from '../components/DevelopmentMessage';

export const metadata = {
  title: 'My Membership - MTC',
  description:
    'Are you ready to find some info about the leaders here at MTC, listen to voice of your leaders and learn who they are and what they have in store for you this year.',
};

export default function MembershipPage() {
  return (
    <div className="bg-gray-100">
      {/* TODO: change the background color to image */}
      <div className="bg-ming2">
        <div className="h-60 ml-6 flex items-end text-white">
          <h1 className="text-xl md:text-3xl mb-4 tracking-wider">
            Membership
          </h1>
        </div>
      </div>
      <DevelopmentMessage />
    </div>
  );
}
