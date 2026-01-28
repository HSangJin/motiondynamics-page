import { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface MotionState {
  heave: number;      // -100 to 100 (mm)
  roll: number;       // -25 to 25 (degrees)
  pitch: number;      // -23 to 23 (degrees)
  yaw: number;        // -25 to 25 (degrees)
  surge: number;      // -100 to 100 (mm)
  sway: number;       // -100 to 100 (mm)
}

export default function MotionSimulator() {
  const [motion, setMotion] = useState<MotionState>({
    heave: 0,
    roll: 0,
    pitch: 0,
    yaw: 0,
    surge: 0,
    sway: 0,
  });

  const [isAnimating, setIsAnimating] = useState(false);
  const [time, setTime] = useState(0);

  // 자동 애니메이션 로직
  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setTime(prev => (prev + 0.05) % (Math.PI * 2));
    }, 50);

    return () => clearInterval(interval);
  }, [isAnimating]);

  // 시간에 따른 모션 업데이트
  useEffect(() => {
    if (isAnimating) {
      setMotion({
        heave: Math.sin(time) * 80,
        roll: Math.sin(time + Math.PI / 3) * 25,
        pitch: Math.sin(time + Math.PI / 2) * 23,
        yaw: Math.sin(time + Math.PI / 4) * 25,
        surge: Math.sin(time + Math.PI / 6) * 80,
        sway: Math.sin(time + Math.PI / 3) * 80,
      });
    }
  }, [time, isAnimating]);

  const resetMotion = () => {
    setMotion({
      heave: 0,
      roll: 0,
      pitch: 0,
      yaw: 0,
      surge: 0,
      sway: 0,
    });
    setTime(0);
    setIsAnimating(false);
  };

  // 3D 변환 계산
  const getTransform = () => {
    const translateZ = motion.heave;
    const rotateX = motion.pitch;
    const rotateY = motion.roll;
    const rotateZ = motion.yaw;
    const translateX = motion.surge;
    const translateY = motion.sway;

    return {
      transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
      transformStyle: 'preserve-3d' as const,
    };
  };

  return (
    <div className="w-full space-y-8">
      {/* 3D 시각화 영역 */}
      <div className="bg-background border border-white/10 rounded-lg p-8 min-h-[500px] flex items-center justify-center" style={{ perspective: '1000px' }}>
        <div className="relative w-full h-[400px] flex items-center justify-center" style={{ perspective: '1000px' }}>
          {/* 기준 프레임 */}
          <div className="absolute w-64 h-64 border-2 border-white/20 rounded opacity-30"></div>

          {/* 모션 플랫폼 상부 */}
          <div
            className="absolute w-48 h-48 bg-gradient-to-br from-primary/40 to-secondary/40 border-2 border-primary rounded-lg shadow-2xl flex items-center justify-center transition-transform duration-75"
            style={getTransform()}
          >
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-white mb-2">6-DOF</div>
              <div className="text-xs text-muted-foreground">Motion Platform</div>
            </div>
          </div>

          {/* 좌표축 표시 */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* X축 (빨강) */}
            <div className="absolute w-32 h-1 bg-red-500/50 rounded" style={{ transform: 'rotateZ(0deg)' }}></div>
            {/* Y축 (초록) */}
            <div className="absolute h-32 w-1 bg-green-500/50 rounded" style={{ transform: 'rotateZ(90deg)' }}></div>
            {/* Z축 (파랑) */}
            <div className="absolute w-32 h-1 bg-blue-500/50 rounded" style={{ transform: 'rotateX(90deg)' }}></div>
          </div>
        </div>

        {/* 범례 */}
        <div className="absolute bottom-4 right-4 text-xs space-y-1 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500/50 rounded"></div>
            <span>Surge (X축)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500/50 rounded"></div>
            <span>Sway (Y축)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500/50 rounded"></div>
            <span>Heave (Z축)</span>
          </div>
        </div>
      </div>

      {/* 제어 패널 */}
      <div className="bg-card border border-white/10 rounded-lg p-8 space-y-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Motion Control Panel</h3>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={isAnimating ? "default" : "outline"}
              onClick={() => setIsAnimating(!isAnimating)}
              className="gap-2"
            >
              {isAnimating ? (
                <>
                  <Pause className="w-4 h-4" />
                  PAUSE
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  PLAY
                </>
              )}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={resetMotion}
              className="gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              RESET
            </Button>
          </div>
        </div>

        {/* 슬라이더 그룹 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 직선 운동 (Surge, Sway, Heave) */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest border-b border-white/10 pb-3">
              Linear Motion (직선운동)
            </h4>

            {/* Surge */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm text-muted-foreground">Surge (전후)</label>
                <span className="text-white font-mono text-sm">{motion.surge.toFixed(0)}mm</span>
              </div>
              <Slider
                value={[motion.surge]}
                onValueChange={(value) => setMotion({ ...motion, surge: value[0] })}
                min={-100}
                max={100}
                step={1}
                disabled={isAnimating}
                className="w-full"
              />
            </div>

            {/* Sway */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm text-muted-foreground">Sway (좌우)</label>
                <span className="text-white font-mono text-sm">{motion.sway.toFixed(0)}mm</span>
              </div>
              <Slider
                value={[motion.sway]}
                onValueChange={(value) => setMotion({ ...motion, sway: value[0] })}
                min={-100}
                max={100}
                step={1}
                disabled={isAnimating}
                className="w-full"
              />
            </div>

            {/* Heave */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm text-muted-foreground">Heave (상하)</label>
                <span className="text-white font-mono text-sm">{motion.heave.toFixed(0)}mm</span>
              </div>
              <Slider
                value={[motion.heave]}
                onValueChange={(value) => setMotion({ ...motion, heave: value[0] })}
                min={-100}
                max={100}
                step={1}
                disabled={isAnimating}
                className="w-full"
              />
            </div>
          </div>

          {/* 회전 운동 (Roll, Pitch, Yaw) */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest border-b border-white/10 pb-3">
              Rotational Motion (회전운동)
            </h4>

            {/* Roll */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm text-muted-foreground">Roll (좌우회전)</label>
                <span className="text-white font-mono text-sm">{motion.roll.toFixed(1)}°</span>
              </div>
              <Slider
                value={[motion.roll]}
                onValueChange={(value) => setMotion({ ...motion, roll: value[0] })}
                min={-25}
                max={25}
                step={0.1}
                disabled={isAnimating}
                className="w-full"
              />
            </div>

            {/* Pitch */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm text-muted-foreground">Pitch (앞뒤기울기)</label>
                <span className="text-white font-mono text-sm">{motion.pitch.toFixed(1)}°</span>
              </div>
              <Slider
                value={[motion.pitch]}
                onValueChange={(value) => setMotion({ ...motion, pitch: value[0] })}
                min={-23}
                max={23}
                step={0.1}
                disabled={isAnimating}
                className="w-full"
              />
            </div>

            {/* Yaw */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm text-muted-foreground">Yaw (제자리회전)</label>
                <span className="text-white font-mono text-sm">{motion.yaw.toFixed(1)}°</span>
              </div>
              <Slider
                value={[motion.yaw]}
                onValueChange={(value) => setMotion({ ...motion, yaw: value[0] })}
                min={-25}
                max={25}
                step={0.1}
                disabled={isAnimating}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* 정보 박스 */}
        <div className="bg-background border border-white/5 p-4 rounded text-xs text-muted-foreground space-y-2">
          <p>
            <span className="text-white font-medium">💡 팁:</span> PLAY 버튼을 클릭하면 자동으로 모든 축이 동시에 움직이는 모습을 볼 수 있습니다.
            슬라이더를 직접 조작하여 각 축의 움직임을 개별적으로 제어할 수도 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
