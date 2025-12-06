"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bgImage from "../../public/images/background.png";
import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";
import { TalentCarousel } from "../organisms/TalentCarousel";
import { JobCategories } from "@/app/api/job-categories/route";
import { Talent } from "@/app/api/talents/route";

type DashboardProps = { 
  jobCategories: JobCategories[];
  talents: Talent[];
};

export const Dashboard: React.FC<DashboardProps> = ({ jobCategories, talents }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 332;
  const totalOriginalWidth = cardWidth * jobCategories.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const nextPosition = prev + cardWidth;
        return nextPosition >= totalOriginalWidth ? 0 : nextPosition;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [totalOriginalWidth]);

  return (
    <div
      className="min-h-screen flex flex-col relative sm:mx-auto"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-br from-[#2DA8C7] sm:from-[#30b1bc] sm:from-50% to-[#2997d3] sm:to-[#1a61da] opacity-50 pointer-events-none"></div>
      <div className="relative z-10 flex flex-col w-full">
        <header className="max-w-7xl mx-auto w-full">
          <div className="sm:mx-auto py-4 flex flex-col gap-4">
            {/* Header Navigation - Hidden on Mobile */}
            <div className="hidden md:flex px-4 sm:px-6 lg:px-8 items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={require("../../public/images/logo.png")}
                  alt="logo"
                  width={144}
                  height={21}
                  className=""
                />
              </div>
              <div className="flex gap-12">
                <Button className="flex flex-row bg-transparent gap-2 items-center justify-center">
                  <Text className="text-white font-[900] text-[16px]">
                    채용
                  </Text>
                  <div className="w-[16px] h-[16px] flex items-center justify-center">
                    <Image
                      src={require("../../public/icons/icon-caret-down.png")}
                      alt="logo"
                      width={16}
                      height={16}
                      className="object-contatin"
                    />
                  </div>
                </Button>
                <Text className="text-white font-[900] text-[16px]">
                  해외 개발자 활용 서비스
                </Text>
              </div>
              <Button className="h-[36px] bg-white text-[#2b7be4] font-semibold rounded px-[24px] py-[6px] rounded-[8px]">
                문의하기
              </Button>
            </div>

            {/* Logo and CTA - Visible on Mobile */}
            <div className="md:hidden px-4 sm:px-6 lg:px-8 flex items-center justify-between">
              <Image
                src={require("../../public/images/logo.png")}
                alt="logo"
                width={100}
                height={15}
                className=""
              />
              <Button className="h-[32px] bg-white text-[#2b7be4] font-semibold rounded px-[16px] py-[4px] text-[14px] rounded-[6px]">
                문의하기
              </Button>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row justify-between items-center lg:mt-[100px] mt-[40px] px-2 gap-8 lg:gap-0">
              <div className="flex px-4 sm:px-6 lg:px-8  flex-col gap-2 w-full lg:w-[50%]">
                {/* badge */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <span className="bg-[#8BC4FF] sm:bg-white px-[12px] py-[6px] rounded-[8px] font-900 text-white sm:text-[#40E2E8] text-[18px] lg:text-[14px]">
                    풀타임, 파트타임
                  </span>
                  <div className="w-0 h-0 border-t-8 border-t-[#8BC4FF] sm:border-t-white border-x-8 border-x-transparent border-b-0 absolute top-8 sm:top-7 left-2"></div>
                </motion.div>
                {/* title */}
                <motion.h1
                  className="text-[36px] sm:text-[40px] md:text-[48px] lg:text-[48px] font-[900] text-white mt-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  최고의 실력을 가진
                  <br />
                  외국인 인재를 찾고 계신가요?
                </motion.h1>
                {/* subtitle */}
                <motion.p
                  className="text-white text-[18px] sm:text-[18px] md:text-[24px] font-[500] mt-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  법률 및 인사관리 부담없이
                  <br />
                  1주일 이내에 원격으로 채용해보세요.
                </motion.p>
                <motion.a
                  href="#"
                  className="text-white underline text-[14px] sm:text-[16px] md:text-[18px] font-[500] mt-2 hidden sm:inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  개발자가 필요하신가요?
                </motion.a>
                {/* salary */}
                <motion.div
                  className="flex-col hidden sm:flex sm:grid sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.div
                    className="flex flex-col items-start pt-4 border-t border-t-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Text className="font-[900] text-white text-[16px] sm:text-[18px]">
                      평균 월 120만원
                    </Text>
                    <Text className="text-white text-[12px] sm:text-[14px] md:text-[16px] mt-2">
                      {`임금을 해당 국가를 기준\n으로 계산합니다.`}
                    </Text>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-start pt-4 border-t border-t-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Text className="font-[900] text-white text-[16px] sm:text-[18px]">
                      최대 3회 인력교체
                    </Text>
                    <Text className="text-white text-[12px] sm:text-[14px] md:text-[16px] mt-2">
                      막상 채용해보니 맞지 않아도 걱정하지 마세요.
                    </Text>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-start pt-4 border-t border-t-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Text className="font-[900] text-white text-[16px] sm:text-[18px]">
                      평균 3일, 최대 10일
                    </Text>
                    <Text className="text-white text-[12px] sm:text-[14px] md:text-[16px] mt-2">
                      급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
                    </Text>
                  </motion.div>
                </motion.div>
              </div>
              {/* carousel */}
              <div className="w-full lg:w-1/2">
                <TalentCarousel talents={talents}/>
              </div>
            </div>
            {/* job categories */}
            <div className="hidden sm:flex relative w-full overflow-hidden mt-[40px] sm:mt-[60px] px-2 lg:px-0">
              <motion.div
                className="flex flex-row gap-4 justify-start lg:justify-center w-fit lg:w-full"
                animate={{ x: -scrollPosition }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* First set of cards */}
                {jobCategories.map((category) => (
                  <motion.div
                    key={`${category.id}-1`}
                    className="bg-[#FFFFFF33] rounded-[12px] p-[12px] sm:p-[16px] flex flex-row items-center min-w-[280px] sm:min-w-[332px] h-[80px] sm:h-[88px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#FFFFFF66] rounded-[8px] p-[10px] sm:p-[12px] flex items-center justify-center mr-[16px] sm:mr-[24px]">
                      <Image
                        src={require(`../../public/icons/${category.icon}`)}
                        alt={category.name}
                        width={32}
                        height={32}
                        className=""
                      />
                    </div>
                    <Text className="font-[900] text-[16px] sm:text-[24px] text-white whitespace-nowrap">
                      {category.name}
                    </Text>
                  </motion.div>
                ))}

                {/* Second set of cards (duplicate for seamless loop) */}
                {jobCategories.map((category) => (
                  <motion.div
                    key={`${category.id}-2`}
                    className="bg-[#FFFFFF33] rounded-[12px] p-[12px] sm:p-[16px] flex flex-row items-center min-w-[280px] sm:min-w-[332px] h-[80px] sm:h-[88px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] bg-[#FFFFFF66] rounded-[8px] p-[10px] sm:p-[12px] flex items-center justify-center mr-[16px] sm:mr-[24px]">
                      <Image
                        src={require(`../../public/icons/${category.icon}`)}
                        alt={category.name}
                        width={32}
                        height={32}
                        className=""
                      />
                    </div>
                    <Text className="font-[900] text-[16px] sm:text-[24px] text-white whitespace-nowrap">
                      {category.name}
                    </Text>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="grid grid-cols-2 sm:hidden px-4 sm:px-6 lg:px-8 gap-3">
              <div className="flex flex-row items-center gap-2">
                <Image
                  alt="checkbox"
                  width={20}
                  height={20}
                  src={require("../../public/icons/icon-checkbox.png")}
                />
                <Text className="text-[16px] font-[500] text-white">
                  한국어 능력
                </Text>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image
                  alt="checkbox"
                  width={20}
                  height={20}
                  src={require("../../public/icons/icon-checkbox.png")}
                />
                <Text className="text-[16px] font-[500] text-white">
                  업무 수행 능력
                </Text>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image
                  alt="checkbox"
                  width={20}
                  height={20}
                  src={require("../../public/icons/icon-checkbox.png")}
                />
                <Text className="text-[16px] font-[500] text-white">
                  겸업 여부
                </Text>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image
                  alt="checkbox"
                  width={20}
                  height={20}
                  src={require("../../public/icons/icon-checkbox.png")}
                />
                <Text className="text-[16px] font-[500] text-white">
                  평판 조회
                </Text>
              </div>
            </div>
            <motion.a
              href="#"
              className="text-[#FBFF23] px-4 sm:px-6 lg:px-8 underline text-[16px] sm:text-[16px] md:text-[18px] font-[500] mt-2 inline-block sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              개발자가 필요하신가요?
            </motion.a>
          </div>
        </header>
      </div>
    </div>
  );
};
