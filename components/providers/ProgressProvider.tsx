'use client'

// named imports
import { Next13ProgressBar } from 'next13-progressbar'

const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Next13ProgressBar
        height='5px'
        color='#89CFF0'
        options={{ showSpinner: true }}
        showOnShallow
      />
    </>
  );
};

export default ProgressProvider;