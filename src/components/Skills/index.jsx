import React from "react";
import {
    SkillsConatiner,
    SkillsItem,
    SkillsItemTitle,
    SkillsItemInner,
    SkillsItemInnerItem,
    SkillsItemInnerSubItem,
    SkillsItemP
} from "./elements";
import { FaMapMarkerAlt, FaReact, FaChartPie, FaNodeJs, FaAws, FaGitAlt, FaBitbucket, FaAngular, FaVuejs } from "react-icons/fa";
import {
    SiJavascript, SiTypescript, SiRedux, SiApollographql, SiNextdotjs, SiMui,
    SiTailwindcss, SiBootstrap, SiExpress, SiAwsamplify, SiMongodb, SiSequelize, SiSocketdotio, SiAzuredevops, SiVisualstudiocode, SiKeystone, SiNestjs
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { HiOutlineTranslate } from "react-icons/hi";

const DATA = [
    {
        title: 'Languages',
        list: [{
            icon: <SiJavascript />,
            text: 'JavaScript (ES6+)'
        },
        {
            icon: <SiTypescript />,
            text: 'TypeScript'
        }
        ]
    },
    {
        title: 'Front-end',
        list: [
            {
                icon: <FaReact />,
                text: 'React.js'
            },
            {
                icon: <FaAngular />,
                text: 'Angular.js'
            },
            {
                icon: <FaVuejs />,
                text: 'Vue.js'
            },
            {
                icon: <SiRedux />,
                text: 'Redux'
            },
            {
                icon: <SiApollographql />,
                text: 'Apollo Client'
            },
            {
                icon: <SiNextdotjs />,
                text: 'Next.js'
            },
            {
                icon: <SiMui />,
                text: 'Material-UI'
            },
            {
                icon: <SiTailwindcss />,
                text: 'Tailwind CSS'
            },
            {
                icon: <SiBootstrap />,
                text: 'Bootstrap'
            },
            {
                icon: <HiOutlineTranslate />,
                text: 'Format.js'
            },
            {
                icon: <FaChartPie />,
                text: 'D3.js (Nivo charts)'
            }

        ]
    },
    {
        title: 'Back-end',
        list: [{
            icon: <FaNodeJs />,
            text: 'Node.js'
        },
        {
            icon: <SiExpress />,
            text: 'Express.js'
        },
        {
            icon: <SiNestjs />,
            text: 'Nest.js'
        },
        {
            icon: <SiKeystone />,
            text: 'Keystone.js'
        },
        {
            icon: <FaAws />,
            text: 'AWS'
        },
        {
            icon: <SiAwsamplify />,
            text: 'AWS Amplify'
        },
        {
            icon: <GrGraphQl />,
            text: 'GraphQL'
        },
        {
            icon: <SiApollographql />,
            text: 'Apollo Server'
        },
        {
            icon: <SiMongodb />,
            text: 'MongoDB'
        },
        {
            icon: <SiSequelize />,
            text: 'Sequelize'
        },
        {
            icon: <SiSocketdotio />,
            text: 'Socket.io'
        },
        {
            icon: <FaMapMarkerAlt />,
            text: 'Google Maps'
        }
        ]
    },
    {
        title: 'Others',
        list: [{
            icon: <FaGitAlt />,
            text: 'Git'
        },
        {
            icon: <FaBitbucket />,
            text: 'Bitbucket'
        },
        {
            icon: <SiAzuredevops />,
            text: 'Azure DevOps'
        },
        {
            icon: <SiVisualstudiocode />,
            text: 'VS Code'
        }]
    }
]
function Skills() {
    return (
        <SkillsConatiner>
            {DATA.map((el, index) => (
                <SkillsItem key={index}>
                    <SkillsItemTitle>
                        {el.title}
                    </SkillsItemTitle>
                    <SkillsItemInner>
                        {el.list.map((elm, key) => (
                            <SkillsItemInnerItem key={key}>
                                <SkillsItemInnerSubItem>
                                    {elm.icon}
                                </SkillsItemInnerSubItem>
                                <SkillsItemP>
                                    {elm.text}
                                </SkillsItemP>
                            </SkillsItemInnerItem>
                        ))}

                    </SkillsItemInner>
                </SkillsItem>
            ))}

        </SkillsConatiner>
    );
}

export default Skills;
