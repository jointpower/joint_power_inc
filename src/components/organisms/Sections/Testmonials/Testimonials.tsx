import Heading from '@/components/atom/Heading/Heading';
import Testimony from '@/components/molecules/Testimony/Testimony';
import maryJune1 from 'public/maryJune-1.png';
import maryJune2 from 'public/maryJune-2.png';
import maryJune3 from 'public/maryJune-4.png';

const Testimonials = () => {
  const testimonies = [
    {
      avatarUrl: maryJune1,
      name: 'James Clerk',
      testimony:
        'JPS is the best. Their service is 100% efficient, professional with minimal charge. I love this company ',
      className: 'text-black md:left-[2vw] bg-white',
      textClass: 'relative md:left-[2vw]',
    },
    {
      avatarUrl: maryJune2,
      name: 'Mary Jane',
      testimony:
        "I'm so happy to come across joint power security with them safety is sure, their team is superb.",
      className:
        'text-white bg-primary md:-mt-[30px] lg:-mt-[80px] xl:-mt-[120px] ',
    },
    {
      avatarUrl: maryJune3,
      name: 'Chris Demian',
      testimony:
        'JPS is the best.  have enjoyed their service countless number of times.',
      className: 'text-black md:-left-[2vw] md:-z-10 bg-white',
      textClass: 'relative md:right-[2vw]',
    },
  ];
  return (
    <section className="bg-grey-7/10 ">
      <Heading
        level={3}
        className="text-black text-[24px] text-center mt-[60px] pt-[50px] md:pt-[80px] font-semibold"
      >
        Few Testimonials
      </Heading>
      <div className="flex flex-col md:flex-row justify-center  pt-[50px] md:pb-[50px] lg:pt-[120px] xl:mt-[100px] mb-[30px] md:mb-[50px] relative">
        {testimonies.map(
          ({ testimony, avatarUrl, className, textClass, name }, index) => (
            <li key={index}>
              <Testimony
                name={name}
                avatarUrl={avatarUrl}
                testimony={testimony}
                className={className}
                textClass={textClass}
              />
            </li>
          )
        )}
        ;
      </div>
    </section>
  );
};

export default Testimonials;
