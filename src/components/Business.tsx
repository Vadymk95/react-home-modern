import { FC } from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';
import { Button } from './Button';
import { FeatureCard } from './FeatureCard';

const marginB = (index: number) => index !== features.length - 1 ? 'mb-6' : 'mb-0';

export const Business: FC = () => {
  return (
    <section className={layout.section} id="features">
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" />
          we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, i) => (
          <FeatureCard
            key={feature.id}
            {...feature}
            marginB={marginB(i)}
          />
        ))}
      </div>
    </section>
  );
};
