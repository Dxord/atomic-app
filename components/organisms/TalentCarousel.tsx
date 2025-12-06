"use client";

import { Talent } from "@/app/api/talents/route";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import { Text } from "../atoms/Text";

const itemVariants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 1000 : -1000,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -1000 : 1000,
    transition: {
      duration: 0.6,
    },
  }),
};
type TalentCarouselProps = {
  talents: Talent[];
};

export const TalentCarousel: React.FC<TalentCarouselProps> = ({ talents }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % talents.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + talents.length) % talents.length
    );
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      cards.push(talents[(currentIndex + i + talents.length) % talents.length]);
    }
    return cards;
  };

  return (
    <div className="relative w-full py-8 px-1 sm:px-4">
      {/* Carousel Container */}
      <div className="relative w-full flex justify-center items-center h-70 mt-8 lg:mt-0 sm:h-96 gap-4 perspective">
        {/* Cards */}
        <AnimatePresence mode="wait">
          {getVisibleCards().map((talent, idx) => {
            const isCenter = idx === currentIndex;
            const isLeft = idx === 0;

            return (
              <motion.div
                key={`${currentIndex}-${talent.id}`}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`absolute w-[234px] h-[311px] sm:w-[292px] sm:h-[408px] ${
                  isCenter
                    ? "z-10 scale-100 w-80 opacity-100"
                    : isLeft
                    ? "left-0 z-0 scale-75 opacity-50"
                    : "right-0 sm:right-0 z-0 scale-75 opacity-50"
                }`}
                transition={{
                  duration: 0.5,
                }}
              >
                {/* Salary Tooltip */}
                {currentIndex == idx && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className="absolute -top-16 right-8 left-8 flex items-center justify-center"
                  >
                    <div className="flex bg-white px-[16px] py-[8px] rounded-[8px] shadow-lg">
                      <Text className="text-[#00C696] font-[500] text-[18px]">
                        월{" "}
                        <span className="text-[#00C696] font-[900] text-[18px]">
                          {talents[currentIndex].salary}만원
                        </span>{" "}
                      </Text>
                    </div>
                    <div className="w-0 h-0 border-t-8 border-t-white border-x-8 border-x-transparent border-b-0 absolute top-10"></div>
                  </motion.div>
                )}

                <div className="flex flex-col items-center bg-white rounded-[12px] lg:w-[292px] lg:h-[400px] shadow-lg p-[16px] sm:p-[36px] relative">
                  {/* Profile Image Circle */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className=" w-[69px] h-[64px] sm:w-[120px] sm:h-[120px] bg-gray-200 rounded-full flex items-center justify-center font-bold"
                  >
                    <div className="relative flex">
                      <Image
                        src={talent.image}
                        alt="profile"
                        width={120}
                        height={120}
                        className=" w-[69px] h-[64px] sm:w-[120px] sm:h-[120px] object-contain"
                      />
                      <Image
                        src={talent.country}
                        alt="profile"
                        width={25}
                        height={18}
                        className="absolute bottom-0 right-0 sm:right-4 object-contain"
                      />
                    </div>
                  </motion.div>

                  {/* Name and Badge */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="flex flex-col items-center gap-2 mt-[16px] flex-wrap justify-center"
                  >
                    <Text className="font-[900] text-[18px] sm:text-[24px] text-center">
                      {talent.name}
                    </Text>
                    <span className="text-[#4A77FF] text-[14px] sm:text-[16px] font-[500]">
                      {talent.title}{" "}
                      <span className="text-[#4A77FF] text-[16px] font-[900]">
                        · {talent.experience}
                      </span>
                    </span>
                  </motion.div>

                  {/* Skills Tags */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap gap-2 mt-4 justify-center"
                  >
                    {talent.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skillIdx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.25 + skillIdx * 0.05,
                        }}
                        className="px-2 sm:px-[12px] py-[4px] rounded text-[14px] sm:text-sm border border-[#C1C5CF] whitespace-nowrap"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full p-3  hover:bg-gray-100 transition-colors w-12 h-12 flex items-center justify-center text-2xl font-bold text-[#2b7be4]"
      >
        <Image
          src={require("../../public/icons/icon-caret-left.png")}
          alt="right"
          width={32}
          height={32}
          className=" object-contain"
        />
      </motion.button>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full p-3  hover:bg-gray-100 transition-colors w-12 h-12 flex items-center justify-center text-2xl font-bold text-[#2b7be4]"
      >
        <Image
          src={require("../../public/icons/icon-caret-right.png")}
          alt="right"
          width={32}
          height={32}
          className=" object-contain"
        />
      </motion.button>
    </div>
  );
};
