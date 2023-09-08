import { execSync } from 'child_process'
import fs from 'fs'

// Generate array of every yaml file without the extension
const files: string[] = fs.readdirSync('./cliter/starlight')
                .filter(file => file.endsWith('.yaml'))
                .map(file => file.replace('.aurora.yaml', ''))


// Load the command on the terminal with the entities names
function loadYaml(fileName: string): void {
    try {
        console.log(files)
        execSync(`aurora load back module -n=starlight/${fileName} -ft`, {stdio: 'inherit'})
    } catch (error: any) {
        console.error(`Error al cargar ${fileName}: ${error.message}`)
    }
}

// Iterate every file name
for (const yamlFile of files) {
    loadYaml(yamlFile)
}