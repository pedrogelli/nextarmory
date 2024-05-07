export default function Teste() {
    return (
        <>
        <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css" />

<div className="max-w-2xl mx-auto">
    
    <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
        <ul className="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
            <li className="mr-2" role="presentation">
                <button className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 active" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Profile</button>
            </li>
            <li className="mr-2" role="presentation">
                <button className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 " id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
            </li>
            <li className="mr-2" role="presentation">
                <button className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
            </li>
            <li role="presentation">
                <button className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
            </li>
        </ul>
    </div>
    <div id="myTabContent">
        <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 " id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <p className="text-gray-500 dark:text-gray-400 text-sm"> 1 This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
            <p className="text-gray-500 dark:text-gray-400 text-sm">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden" id="settings" role="tabpanel" aria-labelledby="settings-tab">
            <p className="text-gray-500 dark:text-gray-400 text-sm">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800 hidden" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
            <p className="text-gray-500 dark:text-gray-400 text-sm">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
    </div>

    <p className="mt-5">This tabs component is part of a larger, open-source library of Tailwind CSS components. Learn more by going to the official <a className="text-blue-600 hover:underline" href="#" target="_blank">Flowbite Documentation</a>.</p>
</div>

<script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>

        {/* <div className="lg:w-4/12 mx-auto  p-3">
            <div className="bg-slate-300">
                <p>teste</p>
                <p>Meu conteúdo</p>
                <p>Meu conteúdo</p>
                <p>Meu conteúdo</p>
                <p>Meu conteúdo</p>
                
            </div>
            <div className="bg-slate-400">
                <p>teste</p>
                <p>Meu conteúdo</p>
                <p>Meu conteúdo</p>
                <p>Meu conteúdo</p>
                <p>Meu conteúdo</p>
                
            </div>
        </div> */}
        </>
    )
}
