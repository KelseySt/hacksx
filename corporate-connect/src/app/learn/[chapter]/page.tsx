"use client"
import { outfit, roboto_flex } from '../../fonts'
import {Accordion, AccordionItem} from "@heroui/react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@heroui/react";
import { BookOpenText, HandCoins } from "@phosphor-icons/react";
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';


/**
 * Type true = lesson
 * Type false = quiz
 * 1 is Balanced Clicked
 * 2 is EBITDA clicked
 */
const cirriculum = [
    {
        ch: "1",
        modules: [
            {
                key: 1,
                lessonTitle: "Balance Sheet Breakdown",
                desc: "What is a Balance Sheet? How can we derive a business' financial health from it?",
                img: "/images/balance-sheet2-icon.png",
                quiz1: "Quiz 1 | 10pts",
                quiz2: "Quiz 2 | 10pts",
            },
            {
                key: 2,
                lessonTitle: "Key Metrics",
                desc: "What are industry standard metrics? How can we calculate them?",
                img: "/images/key-metrics-icon.png",
                quiz1: "Quiz 1 | 10pts",
                quiz2: "Quiz 1 | 10pts",
            }
        ],
    },
    {
        ch: "2",
        modules: [
            {
                key: 1,
                lessonTitle: "How EBITDA Calculation Works",
                desc: "What is EBITDA? Why do we use it?",
                img: "",
                quiz1: "Quiz 1 | 10pts",
                quiz2: "Quiz 2 | 10pts",
            },
            {
                key: 2,
                lessonTitle: "Analyzing EBITA Calculations",
                desc: "Now that we have the numbers, what do they mean?",
                img: "",
                quiz1: "Quiz 1 | 10pts",
                quiz2: "Quiz 1 | 10pts",
            }
        ],
    }
];

/**
 * Page with Chapter Breakdowns
 */
export default function Chapter() {
    const router = useRouter();
    const params = useParams();
    const uid = params.chapter;
    
    const currChapter = cirriculum.filter(lesson => lesson.ch === uid);
    
  return (
    <div className="">
      <h1 className='text-7xl my-10 ml-10'>Chapter {uid} </h1>
      <div className='grid grid-cols-1 justify-center mx-10 lg:w-1/2 space-y-10'>
        
      {cirriculum[0].modules.map((e) => {
        return(
        <Card key={e.key} className="bg-lpurple p-3 rounded-2xl">
        <CardHeader className=" py-2 px-4 flex-col items-start">
        </CardHeader>
        <CardBody className="overflow-visible py-2">
            <div className='grid grid-cols-2'>
                <Image
                alt="Card background"
                className="object-cover rounded-xl mt-4"
                src={e.img}
                width={270}
                />
                <div className='ml-2'>
                    <h1 className='flex text-2xl'>{e.lessonTitle}</h1>
                    <p>{e.desc}</p>
                    <Button className="block bg-white rounded-xl p-4 my-2" onPress={() => router.push(`/learn/${uid}/${e.key}`)}>
                    Lesson - <span className='font-bold'>20pts</span>
                    </Button>
                    <Button className="block bg-white rounded-xl p-4 my-2" onPress={() => router.push(`/learn/${uid}/${e.key}/1`)}>
                    Quiz 1 - <span className='font-bold'>10pts</span>
                    </Button>
                    <Button className="block bg-white rounded-xl p-4 "   onPress={() => router.push(`/learn/${uid}/${e.key}/2`)}>
                    Quiz 2 - <span className='font-bold'>10pts</span>
                    </Button>
                </div>
            </div>
        </CardBody>
        </Card>
        );
      })}
      </div>

    </div>
  );
}
