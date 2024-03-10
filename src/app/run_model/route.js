import { exec } from 'child_process';
export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(req) {
    console.log("api routing is working fine.")
    exec('jupyter nbconvert --execute /pose_detection/main.ipynb', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return { error: 'Failed to run script' };
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        return { message: 'Script run successfully' };
    });
}