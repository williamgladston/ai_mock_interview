import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 maxx-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice on Interview question & get instant feedback
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robo-dude"
          width="400"
          height="400"
          className="max-sm:hidden"
        />

      </section>
      <section className="flex flex-col mt-8 gap-6">
        <h2>Your Interview</h2>
        <div className="interview-section"></div>
{dummyInterviews.map((interview)=>(
  <InterviewCard key={interview.id} {...interview}/>
))}
      </section>

      <section className="flex flex-col mt-8 gap-6">
        <h2>Take an Interview</h2>
        <div className="interview-section"></div>
        {dummyInterviews.map((interview)=>(
  <InterviewCard key={interview.id} {...interview}/>
))}
<p> There are no interviews available </p>
      </section><a href="http://"></a>
    </>
  );
};

export default page;
