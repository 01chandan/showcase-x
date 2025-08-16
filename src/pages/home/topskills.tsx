"use client"
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Variants } from "framer-motion";

const SkillIcons = {
    HTML: (props: React.SVGProps<SVGSVGElement>) => (
        <svg id="fi_3128323" className='fill-[#F3F4F6] w-8  h-8' enableBackground="new 0 0 100 100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g id="_x35_6.HTML"><path id="Icon_103_" d="m19.648 80.009 30.352 9.991 30.352-9.991 4.978-70.009h-70.66zm53.087-58.29-.668 9.375h-34.726l.847 12.031h33.044l-2.012 28.219-19.22 6.422-19.219-6.422-.657-9.469h9.375l.19 2.577 10.311 3.422 10.313-3.422.842-11.952h-31.734l-2.156-30.781z" fill="#F3F4F6"></path></g></svg>

    ),
    CSS: (props: React.SVGProps<SVGSVGElement>) => (
        <svg stroke="currentColor" className='fill-[#F3F4F6] w-8 h-8' fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path></svg>
    ),
    Javascript: (props: React.SVGProps<SVGSVGElement>) => (
        <svg id="fi_5968292" className='fill-[#000000] w-8 h-8' enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m0 0h512v512h-512z" fill="#F3F4F6"></path><path d="m343.934 400.002c10.313 16.839 23.731 29.216 47.462 29.216 19.935 0 32.67-9.964 32.67-23.731 0-16.498-13.084-22.341-35.027-31.939l-12.028-5.161c-34.719-14.791-57.783-33.321-57.783-72.493 0-36.084 27.494-63.553 70.461-63.553 30.59 0 52.582 10.646 68.429 38.522l-37.465 24.056c-8.249-14.791-17.148-20.618-30.964-20.618-14.092 0-23.024 8.94-23.024 20.618 0 14.434 8.94 20.277 29.582 29.217l12.028 5.152c40.879 17.53 63.959 35.401 63.959 75.581 0 43.317-34.028 67.048-79.726 67.048-44.682 0-73.549-21.293-87.674-49.201zm-169.96 4.169c7.558 13.41 14.434 24.747 30.964 24.747 15.807 0 25.779-6.185 25.779-30.232v-163.597h48.112v164.246c0 49.818-29.208 72.493-71.843 72.493-38.522 0-60.83-19.936-72.176-43.947z"></path></g></svg>
    ),
    Typescript: (props: React.SVGProps<SVGSVGElement>) => (
        <svg id="fi_5968381" className='fill-[#000000] w-8 h-8' enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m50 0h412c27.614 0 50 22.386 50 50v412c0 27.614-22.386 50-50 50h-412c-27.614 0-50-22.386-50-50v-412c0-27.614 22.386-50 50-50z" fill="#000000"></path><path d="m50 0h412c27.614 0 50 22.386 50 50v412c0 27.614-22.386 50-50 50h-412c-27.614 0-50-22.386-50-50v-412c0-27.614 22.386-50 50-50z" fill="#F3F4F6"></path><path clipRule="evenodd" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c21.219 0 44.448-3.035 62.602-14.784 18.064-11.691 26.449-31.14 26.449-52.172 0-15.637-4.851-30.684-15.807-42.081-16.429-17.091-39.516-24.022-60.255-34.183-10.389-5.09-24.727-12.992-24.727-26.361 0-3.441.887-6.543 2.661-9.307 7.132-11.113 22.973-13.376 35.057-13.376 13.717 0 28.189 3.071 40.926 8.76 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 11.792 4.822 24.053 9.581 34.665 16.739 7.355 4.96 14.007 11.877 14.007 21.275 0 6.821-3.856 12.604-9.468 16.192-8.303 5.308-18.936 6.492-28.563 6.492-10.851 0-21.597-1.903-32.24-5.71-10.641-3.806-20.501-9.516-29.578-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#000000" fillRule="evenodd"></path></g></svg>
    ),
    React: (props: React.SVGProps<SVGSVGElement>) => (
        <svg className='w-8 h-8' viewBox="0 0 128 128" {...props}>
            <circle cx="64" cy="64" r="11" fill="#F3F4F6" />
            <g stroke="#F3F4F6" strokeWidth="5" fill="none">
                <ellipse rx="56" ry="24" cx="64" cy="64" transform="rotate(60 64 64)" />
                <ellipse rx="56" ry="24" cx="64" cy="64" transform="rotate(120 64 64)" />
                <ellipse rx="56" ry="24" cx="64" cy="64" />
            </g>
        </svg>
    ),
    Next: (props: React.SVGProps<SVGSVGElement>) => (
        <svg stroke="currentColor" className='fill-[#F3F4F6] w-8 h-8' fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"></path></svg>
    ),
    Tailwind: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 128 128" {...props}>
            <path fill="#F3F4F6" d="M64 28c-17 0-28 8-32 24 7-8 15-11 24-8 5 2 9 7 13 13 5 8 11 13 20 13 17 0 28-8 32-24-7 8-15 11-24 8-5-2-9-7-13-13-5-8-11-13-20-13zM32 68c-17 0-28 8-32 24 7-8 15-11 24-8 5 2 9 7 13 13 5 8 11 13 20 13 17 0 28-8 32-24-7 8-15 11-24 8-5-2-9-7-13-13-5-8-11-13-20-13z" />
        </svg>
    ),
    Node: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="none" className='fill-[#F3F4F6] w-8 h-8' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="fi_15380914"><path clipRule="evenodd" d="m11.5 2.13397c.3094-.17863.6906-.17863 1 0l7.7943 4.5c.3094.17864.5.50876.5.86603v9c0 .3573-.1906.6874-.5.866l-7.7943 4.5c-.3094.1787-.6906.1787-1 0l-1.94852-1.125c-.47829-.2761-.64217-.8877-.36602-1.366.27614-.4783.88774-.6422 1.36604-.366l1.4485.8363 6.7943-3.9226v-7.84535l-6.7943-3.92265-6.79419 3.92265v7.88175l1.56663 1.0243c.00615-.0006.01238-.0012.01869-.0019.19611-.0196.4407-.0576.67155-.1268.24131-.0724.3971-.1582.47777-.2308.05204-.0468.05959-.0684.05959-.1239v-7.5c0-.55228.44771-1 1-1 .55228 0 .99996.44772.99996 1v7.5c0 .6945-.30491 1.2354-.72163 1.6105-.38809.3493-.85731.5447-1.24101.6598-.39416.1183-.77459.174-1.04723.2013-.13876.0139-.25554.0209-.33989.0246-.04229.0018-.07678.0027-.10217.0032l-.03122.0005-.01028.0001h-.00375-.00153c-.00031 0-.00129 0-.00129-1v1c-.19438 0-.38455-.0567-.54724-.163l-2.29419-1.5c-.2825-.1847-.45276-.4995-.45276-.837v-9c0-.35727.1906-.68739.5-.86603zm.3599 6.66031c.6027-.5023 1.4775-.79428 2.6401-.79428 1.1627 0 2.0375.29198 2.6402.79428.5957.49643.8598 1.14959.8598 1.70572 0 .5523-.4477 1-1 1-.5522 0-1-.4477-1-1 0 .0111.0006.0162.0003.0163-.0013.0002-.0167-.0825-.1404-.1856-.1473-.1227-.5225-.3307-1.3599-.3307-.8373 0-1.2125.208-1.3598.3307-.1183.0986-.1376.1785-.1401.1851.0005.2507.0136.2759.0188.2859.0002.0004.0004.0007.0006.0011.0004.0008.0123.0264.0668.0748.0593.0527.1682.1316.361.228.3875.1937.7835.2963 1.2953.4243l.0326.0081c.4824.1205 1.0732.2681 1.6721.5676.7618.3809 1.1598.9694 1.3562 1.4605.0962.2403.1445.4569.1693.6178.0125.0811.0192.15.0229.2034.0019.0267.0029.0497.0036.0686l.0006.0252.0001.0103v.0045.0021.001c0 .0005 0 .001-1 .001l1-.001c0 .5561-.2641 1.2103-.8598 1.7067-.6027.5023-1.4775.7943-2.6402.7943-1.1626 0-2.0374-.292-2.6401-.7943-.5958-.4964-.8599-1.1496-.8599-1.7057 0-.5523.4478-1 1-1 .5523 0 1 .4477 1 1 0-.0111-.0005-.0162-.0002-.0163.0013-.0002.0167.0825.1404.1856.1473.1227.5225.3307 1.3598.3307.8374 0 1.2126-.208 1.3599-.3307.0982-.0819.1282-.1509.137-.1757-.0003-.0018-.0006-.0037-.0009-.0056-.0065-.0423-.0206-.1069-.0494-.1791-.0536-.1339-.1557-.2954-.3938-.4145-.3875-.1937-.7835-.2963-1.2953-.4243l-.0327-.0081c-.4823-.1205-1.0731-.2681-1.672-.5676-.6132-.3066-1.0668-.6863-1.3222-1.1972-.2328-.4656-.2314-.9237-.2306-1.1612 0-.0127 0-.0247 0-.036 0-.55612.2641-1.20929.8599-1.70572z" fill="#F3F4F6" fillRule="evenodd"></path></svg>
    ),
    Python: (props: React.SVGProps<SVGSVGElement>) => (
        <svg id="fi_5968350" className='fill-[#F3F4F6] w-8 h-8' enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" ><linearGradient id="path1948_00000153663380415884157280000008978240784360615575_" gradientTransform="matrix(.563 0 0 -.568 -514.163 286.842)" gradientUnits="userSpaceOnUse" x1="896.959" x2="1393.622" y1="479.369" y2="52.058"><stop offset="0" stopColor="#5a9fd4"></stop><stop offset="1" stopColor="#306998"></stop></linearGradient><linearGradient id="path1950_00000075154291388394646000000000998535923326963881_" gradientTransform="matrix(.563 0 0 -.568 -514.163 286.842)" gradientUnits="userSpaceOnUse" x1="1585.627" x2="1408.278" y1="-206.531" y2="44.386"><stop offset="0" stopColor="#ffd43b"></stop><stop offset="1" stopColor="#ffe873"></stop></linearGradient><g><g id="g2303"><path id="path1948" d="m252.985.004c-20.882.097-40.823 1.878-58.369 4.983-51.689 9.132-61.074 28.245-61.074 63.494v46.553h122.147v15.517h-122.147-45.841c-35.499 0-66.584 21.337-76.306 61.928-11.215 46.526-11.712 75.56 0 124.141 8.683 36.161 29.418 61.927 64.917 61.927h41.997v-55.807c0-40.317 34.883-75.879 76.307-75.879h122.005c33.962 0 61.073-27.963 61.073-62.07v-116.31c0-33.102-27.926-57.969-61.073-63.494-20.983-3.493-42.755-5.08-63.636-4.983zm-66.057 37.442c12.617 0 22.92 10.472 22.92 23.347 0 12.83-10.303 23.205-22.92 23.205-12.662 0-22.92-10.375-22.92-23.205 0-12.876 10.258-23.347 22.92-23.347z" fill="#F3F4F6"></path><path id="path1950" d="m392.927 130.551v54.24c0 42.052-35.652 77.445-76.306 77.445h-122.005c-33.419 0-61.074 28.602-61.074 62.07v116.31c0 33.102 28.785 52.573 61.074 62.07 38.665 11.369 75.743 13.424 122.005 0 30.751-8.903 61.073-26.821 61.073-62.07v-46.553h-122.005v-15.518h122.005 61.074c35.499 0 48.728-24.761 61.074-61.927 12.753-38.262 12.21-75.057 0-124.141-8.773-35.34-25.529-61.928-61.074-61.928h-45.841zm-68.618 294.548c12.662 0 22.92 10.375 22.92 23.205 0 12.876-10.258 23.348-22.92 23.348-12.617 0-22.92-10.472-22.92-23.348-.001-12.83 10.302-23.205 22.92-23.205z" fill="#F3F4F6"></path></g></g></svg>
    ),
    Django: (props: React.SVGProps<SVGSVGElement>) => (
        <svg stroke="currentColor" className='fill-[#F3F4F6] w-8 h-8' fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"></path></svg>
    ),
    Vercel: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 128 128" className='fill-[#F3F4F6] w-8 h-8' {...props}>
            <path fill="#F3F4F6" d="M64 0L128 128H0L64 0z" />
        </svg>
    ),
    Firebase: (props: React.SVGProps<SVGSVGElement>) => (
        <svg stroke="currentColor" fill="#F7BE00" strokeWidth="0" role="img" viewBox="0 0 24 24" className='fill-[#F3F4F6] w-8 h-8' height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z"></path></svg>
    ),
    Supabase: (props: React.SVGProps<SVGSVGElement>) => (
        <svg stroke="currentColor" className='fill-[#F3F4F6] w-8 h-8' fill="#3CC88B" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"></path></svg>
    ),
    Git: (props: React.SVGProps<SVGSVGElement>) => (
        <svg stroke="currentColor" fill="#E84E31" strokeWidth="0" role="img" viewBox="0 0 24 24" className="fill-[#F3F4F6] w-8 h-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"></path></svg>
    ),
    Figma: (props: React.SVGProps<SVGSVGElement>) => (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"></path></svg>
    ),
    Framer: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#F3F4F6" className="fill-[#F3F4F6] w-8 h-8" viewBox="0 0 24 24" role="img"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" /></svg>
    )
};
const skillsData = [
    { name: 'HTML', icon: SkillIcons.HTML },
    { name: 'CSS', icon: SkillIcons.CSS },
    { name: 'Javascript', icon: SkillIcons.Javascript },
    { name: 'Typescript', icon: SkillIcons.Typescript },
    { name: 'React.js', icon: SkillIcons.React },
    { name: 'Next.js', icon: SkillIcons.Next },
    { name: 'Tailwind CSS', icon: SkillIcons.Tailwind },
    { name: 'Node.js', icon: SkillIcons.Node },
    { name: 'Python', icon: SkillIcons.Python },
    { name: 'Django', icon: SkillIcons.Django },
    { name: 'Vercel', icon: SkillIcons.Vercel },
    { name: 'Firebase', icon: SkillIcons.Firebase },
    { name: 'Supabase', icon: SkillIcons.Supabase },
    { name: 'Git', icon: SkillIcons.Git },
    { name: 'Figma', icon: SkillIcons.Figma },
    { name: 'Framer Motion', icon: SkillIcons.Framer },
];

//  ANIMATION VARIANTS FOR FRAMER MOTION 

// Animation for the container of the skill cards to stagger the children
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};
type Skill = {
    name: string;
    icon: React.ElementType;
};
// Animation for each individual skill card
const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 10,
        },
    },
};

//  SKILL CARD COMPONENT 
const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
    const Icon = skill.icon;
    const cardRef = useRef<HTMLDivElement>(null);
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty('--mouse-x', `${x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            variants={itemVariants}
            className="group relative flex items-center justify-start gap-4 p-3.5  border border-white/30  transition-all duration-300 cursor-default"
        >
            {/* This div creates the combined background and border glow effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.3), transparent 80%)',
                    // The borderImage property requires a border-style to be set.
                    // We set a transparent border here and the gradient provides the color.
                    border: '1px solid transparent',
                    borderImage: 'radial-gradient(ellipse 40% 80% at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.5), transparent 70%) 1',
                }}
            />

            {/* Icon container - z-10 keeps it above the glow effect */}
            <div className="relative z-10 transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Icon
                    className="w-8 h-8 text-[#F3F4F6] group-hover:text-cyan-400 transition-colors duration-300"
                    strokeWidth={1.5}
                />
            </div>

            {/* Skill name - z-10 keeps it above the glow effect */}
            <span className="relative z-10 text-[16.2px] font-semibold text-[#F3F4F6] group-hover:text-white transition-colors duration-300">
                {skill.name}
            </span>
        </motion.div>
    );
};


//  MAIN COMPONENT 
const App = () => {
    return (
        <div className="bg-[#181A1B] text-white font-sans flex items-center justify-center py-20">
            <div className="w-full max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-2xl md:text-4xl font-bold mb-2.5">Technologies I Work With</h1>
                    <p className="text-base md:text-lg text-gray-300/60 max-w-3xl mx-auto">
                        A curated list of my top skills and the technologies I use to build modern, efficient, and beautiful applications.
                    </p>
                </div>

                {/* The animated grid of skills */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5"
                >
                    {skillsData.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default App;
