#!/bin/bash
# Multi-tone frequencies taken from http://www.tmr-audio.de/pdf/jon_risch_biwiring.pdf

# SYSid Spectral
SYSID="80 100 120 160 200 240 300 400 500 700 900 1200 1500 2000 3000"
# Audio Precision System One DSP and System Two Multitone
APONE="16.15 21.53 26.92 43.07 53.83 64.60 80.75 102.28 123.82 156.12 199.18 253.02 317.61 398.36 500.65 635.23 802.11 1001.3 1248.9 1598.8 1997.2 2503.2 3154.6 3999.8 4995.7 6352.3 7999.6 10002 12500 16005 19999"
# Audio Precision codec test signal
APCODEC="16.15 21.53 26.92 43.07 53.83 64.60 80.75 102.28 123.82 156.12 199.18 253.02 317.61 398.36 500.65 635.23 802.11 1001.3 1248.9 1598.8 1997.2 2503.2 3154.6 3999.8 4995.7 6352.3 7999.6 10002 12500 16005 19999"
# Phi 6 Spectral
PHI6="100 261.8 685.4 1794.4 4697.9 12299"
# Phi 12 Revised Spectral
PHI12="$PHI6 122 348.2 987 2870.4 6765 16358"
# Phi Low-High Split Band Spectral
PHILOWHIGH="100 116.18 134.98 156.80 182.19 4697.9 5927.8 7479.7 9437.9 11909"
# Phi Low-Mid Split Band Spectral
PHILOWMID="100 116.18 134.98 156.80 182.19 986.99 1245.4 1571.4 1982.8 2502.0"
# Phi Tri-Band Spectral
PHITRIBAND="100 116.18 134.98 156.80 986.99 1245.4 1571.4 1982.8 6764.9 7618.5 8579.8 9662.5"

# Generate all multi-tones defined above
ALL="SYSID APONE APCODEC PHI6 PHI12 PHILOWHIGH PHILOWMID PHITRIBAND"
for MULTITONE in $ALL; do
    # [shell trick] take a multi-tone by a name in MULTITONE variable and replace all its spaces with " sin " text
    FREQS="sin ${!MULTITONE// / sin }"
    # each tone is generated on a separate channel, mix all of them into single channel and then save it into 2 channel WAV file
    sox -V -r 44100 -n -c 2 multitone-$MULTITONE.wav synth 60 $FREQS channels 1
done