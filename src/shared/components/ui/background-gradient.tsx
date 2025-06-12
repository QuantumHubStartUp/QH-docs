import { cn } from '@/shared/lib/utils';
import { ELayoutCSS } from '@/shared/types';
import { motion } from 'motion/react';
import React from 'react';

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
    },
  };
  return (
    <div
      className={cn(
        'relative p-4 group border border-transparent',
        containerClassName,
        ELayoutCSS.LEVEL_1,
      )}
    >
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#3b82f6,transparent),radial-gradient(circle_farthest-side_at_100%_0,#8b5cf6,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#facc15,transparent),radial-gradient(circle_farthest-side_at_0_0,#22d3ee,#0f172a)]',
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#3b82f6,transparent),radial-gradient(circle_farthest-side_at_100%_0,#8b5cf6,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#facc15,transparent),radial-gradient(circle_farthest-side_at_0_0,#22d3ee,#0f172a)]',
        )}
      />

      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  );
};
