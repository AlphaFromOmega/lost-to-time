import { scheduler } from "../helper/scheduler";

export function preGameExit
(
    shouldSave: boolean
)
: void
{
    scheduler.ScheduleData = []
}