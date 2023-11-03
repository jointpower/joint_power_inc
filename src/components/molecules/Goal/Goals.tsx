import Heading from '@/components/atom/Heading/Heading';
import Text from '@/components/atom/Text/Text';

interface GoalsProps {
  messageHead: string;
  messageBody: string;
  messageBodyMoblie?: string;
  className: string;
  headerClass?: string;
}
export const Goals = ({
  messageBody,
  messageHead,
  className,
  messageBodyMoblie,
  headerClass,
}: GoalsProps) => {
  return (
    <div
      className={`text-[1.1rem] w-full md:w-[30rem] border-2 border-[#aaaaaa] p-2`}
    >
      <Heading
        level={3}
        className={`py-3 font-semibold bg-gradient-to-r from-[#C1AF6F] text-center`}
      >
        {messageHead}
      </Heading>
      <Text className=" leading-relaxed font-normal mt-1 ">
        {messageBody || messageBodyMoblie}
      </Text>
    </div>
  );
};
