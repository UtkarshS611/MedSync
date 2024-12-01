import {
    List,
    Send,
    Sparkles,
    WandSparkles,
  } from 'lucide-react';
  
  import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from '../../Components/ui/card'
import { Link } from 'react-router-dom';
  
  const Features = () => {


    return (
      <section className="py-32">
        <div className="container">
          <div className="mx-auto flex  flex-col items-center gap-6 text-center">
            <h1 className="mb-6 text-pretty text-4xl font-semibold lg:text-5xl">
            </h1>
            <div className="flex flex-wrap max-w-5xl  justify-center place-items-center gap-8 ">
              <Link to={'/chat'}>
              <Card className='overflow-hidden'>
                <CardHeader className="pb-1">
                  <Send className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">AI Chat assistant</h2>
                  <p className="leading-snug text-muted-foreground">
                    Get instant response to your health queries
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://www.shadcnblocks.com/images/block/placeholder.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
              </Link>
              <Card>
                <CardHeader className="pb-1">
                  <List className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Symptom Checker</h2>
                  <p className="leading-snug text-muted-foreground">
                    Analyze your symptoms and get insights
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://www.shadcnblocks.com/images/block/placeholder.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-1">
                  <WandSparkles className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Medication manager</h2>
                  <p className="leading-snug text-muted-foreground">
                    Check iterations and manage it seamlessly.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://www.shadcnblocks.com/images/block/placeholder.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-1">
                  <Sparkles className="size-4" strokeWidth={1} />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">Health recors</h2>
                  <p className="leading-snug text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src="https://www.shadcnblocks.com/images/block/placeholder.svg"
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  