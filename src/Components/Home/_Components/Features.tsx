import {
    MessageCircle,
    Stethoscope,
    Pill,
    SquareMenu
  } from "lucide-react";
  
  const features = [
    {
      title: 'AI chat assistant',
      description:
        'AI medical assistant offering personalized guidance, real-time support, health tracking, symptom analysis, and medication reminders.',
      icon: <MessageCircle className="size-4 md:size-6" />,
      background: 'bg-green-100',
      color: 'text-green-600'
    },
    {
      title: 'Symptom Checker',
      description:
        'An AI-powered symptom checker helps identify potential health conditions based on reported symptoms and provides recommendations.',
      icon: <Stethoscope className="size-4 md:size-6" />,
      background: 'bg-red-100',
      color: 'text-red-600'
    },
    {
      title: 'Medication iteration analysis',
      description:
        'Medication iteration analysis involves evaluating the effectiveness and side effects of different medication doses or combinations over time.',
      icon: <Pill className="size-4 md:size-6" />,
      background: 'bg-blue-100',
      color: 'text-blue-600'
    },
    {
      title: 'Medical Record analysis',
      description:
        'Medical record analysis involves reviewing patient data to identify patterns, diagnose conditions, and inform treatment plans.',
      icon: <SquareMenu className="size-4 md:size-6" />,
      background: 'bg-yellow-100',
      color: 'text-yellow-600'
    },
  ];
  
  const Features = () => {
    return (
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-screen-xl">
          <h2 className="text-3xl font-medium md:pl-5 lg:text-4xl">
            Our Core Features
          </h2>
          <div className="mx-auto mt-14 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-20">
            {features.map((feature, idx) => (
              <div className="flex gap-6 rounded-lg md:block md:p-5" key={idx}>
                <span className={`mb-8 flex size-10 shrink-0 items-center justify-center rounded-full ${feature.background} ${feature.color} md:size-12`}>
                  {feature.icon}
                </span>
                <div>
                  <h3 className="font-medium md:mb-2 md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  