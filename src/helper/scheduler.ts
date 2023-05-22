interface ScheduleData
{
    Time: number,
    Delay: number,
    Call: (...arg: unknown[]) => void,
    Args: unknown[]
}

export const scheduler: { ScheduleData: ScheduleData[] } = { ScheduleData: [] }

export function Schedule(delay: number, func: (...arg: any[]) => void, args?: unknown[]): void {
    scheduler.ScheduleData.push({
      Time: Game().GetFrameCount(),
      Delay: delay,
      Call: func,
      Args: args ?? []
    })
}


export function scheduleUpdate() : void
{
    const time: number = Game().GetFrameCount()
    scheduler.ScheduleData.forEach((i, j) => {
        const data: ScheduleData = i
        if (data.Time + data.Delay <= time) {
            scheduler.ScheduleData.splice(j, 1)
            data.Call(...data.Args);
        }
    })
}
