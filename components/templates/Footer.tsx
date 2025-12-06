import Image from "next/image";
import React from "react";
import { Text } from "../atoms/Text";

export const Footer: React.FC = () => {
  return (
    <footer className="max-w-7xl mx-auto bg-white border-t border-gray-200 py-[80px] flex flex-col gap-12">
      <div className="px-4 flex flex-col md:flex-row justify-start items-start gap-20">
        <div className="flex flex-col gap-2">
          <Image
            src={require("../../public/images/logo-color.png")}
            alt="Logo"
            width={187}
            height={34}
            className="object-contain"
          />
          <Text className="text-[#343741] text-[14px] font-[500]">
            우리는 국가의 경계를 넘어 최고의 인재를 매칭해드립니다.
          </Text>
          <Text className="text-[#343741] text-[14px] font-[900]">
            010-0000-0000
          </Text>
          <Text className="text-[#343741] text-[14px] font-[900]">
            aaaaa@naver.com
          </Text>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-12">
          <div className="flex flex-col items-start gap-2">
            <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
              <Image
                src={require("../../public/icons/icon-code.png")}
                alt="Logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

            <Text className="font-bold text-[#343741] font-[900]">
              해외 개발자 원격 채용
            </Text>
            <div className="flex flex-row items-center gap-2">
              <a href="#" className="text-[14px] mt-1 font-[500]">
                바로가기
              </a>
              <Image
                src={require("../../public/icons/icon-right-square.png")}
                alt="icon-right-square"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
              <Image
                src={require("../../public/icons/icon-avatar.png")}
                alt="avatar"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <Text className="font-bold text-[#343741] font-[900]">
              외국인 원격 채용 <br/>(비개발)
            </Text>
            <div className="flex flex-row items-center gap-2">
              <a href="#" className="text-[14px] mt-1 font-[500]">
                바로가기
              </a>
              <Image
                src={require("../../public/icons/icon-right-square.png")}
                alt="icon-right-square"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
              <Image
                src={require("../../public/icons/icon-kor.png")}
                alt="kor"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <Text className="font-bold text-[#343741] font-[900]">
              한국어 가능 외국인 채용
            </Text>
            <div className="flex flex-row items-center gap-2">
              <a href="#" className="text-[14px] mt-1 font-[500]">
                바로가기
              </a>
              <Image
                src={require("../../public/icons/icon-right-square.png")}
                alt="icon-right-square"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
              <Image
                src={require("../../public/icons/icon-gear.png")}
                alt="gear"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <Text className="font-bold text-[#343741] font-[900]">
              해외 개발자 활용 서비스
            </Text>
            <div className="flex flex-row items-center gap-2">
              <a href="#" className="text-[14px] mt-1 font-[500]">
                바로가기
              </a>
              <Image
                src={require("../../public/icons/icon-right-square.png")}
                alt="icon-right-square"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full px-4 flex flex-col md:flex-row justify-start items-start gap-13">
        <div className="flex flex-row gap-8">
          <div className="flex flex-col gap-2">
            <Text className="text-[14px] text-[#343741] font-[500]">
              상호명
            </Text>
            <Text className="text-[14px] text-[#343741] font-[500]">
              하이퍼하이어
            </Text>
            <Text className="text-[14px] text-[#343741] font-[900]">
              Hyperhire India Private Limited
            </Text>
          </div>
          <div className="flex flex-col gap-2">
            <Text className="text-[14px] text-[#343741] font-[500]">
              대표 <Text className="font-[900]">CEO</Text>
            </Text>
            <Text className="text-[14px] text-[#343741] font-[500]">
              김주현
            </Text>
            <Text className="text-[14px] text-[#343741] font-[900]">
              Juhyun Kim
            </Text>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-2">
            <Text className="text-[14px] text-[#343741] font-[500]">
              사업자등록번호 <Text className="font-[900]">CIN</Text>
            </Text>
            <Text className="text-[14px] text-[#343741] font-[900]">
              427-86-01187
            </Text>
            <Text className="text-[14px] text-[#343741] font-[900]">
              U74110DL2016PTC290812
            </Text>
          </div>
          <div className="flex flex-col gap-2">
            <Text className="text-[14px] text-[#343741] font-[500]">
              주소 <Text className="font-[900]">ADDRESS</Text>
            </Text>
            <Text className="text-[14px] text-[#343741] font-[500]">
              서울특별시 강남대로 479, 지하 1층 238호
            </Text>
            <Text className="text-[14px] text-[#343741] font-[900]">
              D-138, Street number 11, Jagjeet Nagar, North East Delhi, New
              Delhi, 110053 India
            </Text>
          </div>
        </div>
      </div>
      <Text className="text-start text-[#5E626F] text-[13px] mt-8 ml-4">
        © <Text className="font-[900]">2023 Hyperhire</Text>
      </Text>
    </footer>
  );
};
